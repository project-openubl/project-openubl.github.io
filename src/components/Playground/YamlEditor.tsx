import React, { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import {
  EditorView,
  drawSelection,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from "@codemirror/view";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { HighlightStyle, indentOnInput, syntaxHighlighting } from "@codemirror/language";
import { yaml } from "@codemirror/lang-yaml";
import { tags } from "@lezer/highlight";

// PatternFly palette, same colors as the Prism theme in src/prism/patternfly.js
const patternflyHighlight = HighlightStyle.define([
  { tag: tags.comment, color: "#a3a3a3", fontStyle: "italic" },
  { tag: [tags.propertyName, tags.definition(tags.propertyName)], color: "#92c5f9" },
  { tag: [tags.string, tags.special(tags.string)], color: "#afdc8f" },
  { tag: [tags.number, tags.bool, tags.null], color: "#9ad8d8" },
  { tag: [tags.keyword, tags.typeName], color: "#b6a6e9" },
  { tag: [tags.punctuation, tags.separator, tags.operator], color: "#c7c7c7" },
]);

const patternflyTheme = EditorView.theme(
  {
    "&": {
      color: "#f2f2f2",
      backgroundColor: "transparent",
      fontSize: "13px",
      height: "100%",
    },
    ".cm-scroller": {
      fontFamily: "var(--ifm-font-family-monospace)",
      lineHeight: "1.7",
    },
    ".cm-content": { padding: "16px 0", caretColor: "#92c5f9" },
    ".cm-gutters": {
      backgroundColor: "transparent",
      color: "#707070",
      border: "none",
      paddingLeft: "8px",
    },
    ".cm-activeLine": { backgroundColor: "rgb(255 255 255 / 0.04)" },
    ".cm-activeLineGutter": { backgroundColor: "transparent", color: "#c7c7c7" },
    "&.cm-focused": { outline: "none" },
    "&.cm-focused .cm-cursor": { borderLeftColor: "#92c5f9" },
    ".cm-selectionBackground, &.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "rgb(146 197 249 / 0.25) !important",
    },
  },
  { dark: true },
);

interface Props {
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}

export default function YamlEditor({ value, onChange, ariaLabel }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    const editor = new EditorView({
      parent: host.current!,
      state: EditorState.create({
        doc: value,
        extensions: [
          lineNumbers(),
          highlightActiveLineGutter(),
          highlightActiveLine(),
          drawSelection(),
          history(),
          indentOnInput(),
          EditorState.tabSize.of(2),
          keymap.of([indentWithTab, ...defaultKeymap, ...historyKeymap]),
          yaml(),
          syntaxHighlighting(patternflyHighlight),
          patternflyTheme,
          EditorView.contentAttributes.of({ "aria-label": ariaLabel }),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) onChangeRef.current(update.state.doc.toString());
          }),
        ],
      }),
    });
    view.current = editor;
    return () => editor.destroy();
    // The editor is created once; `value` changes are synced below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Replace the content when a different example is selected.
  useEffect(() => {
    const editor = view.current;
    if (editor && editor.state.doc.toString() !== value) {
      editor.dispatch({ changes: { from: 0, to: editor.state.doc.length, insert: value } });
    }
  }, [value]);

  return <div ref={host} className="h-full min-h-0 overflow-hidden" />;
}
