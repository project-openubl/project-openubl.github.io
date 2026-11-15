import React, { type ComponentType, type SVGProps } from "react";
import clsx from "clsx";

export interface GridItemProps {
  Svg: ComponentType<SVGProps<SVGSVGElement>>;
  style?: string;
  title: string;
  description: string;
  link: string;
}

interface ItemGridProps {
  className?: string;
  itemList: GridItemProps[];
}

function Item({ Svg, style, title, description, link }: GridItemProps) {
  return (
    <div className="grid-item">
      <a href={link}>
        <div className="text--center" style={{ paddingBlock: 25 }}>
          <Svg className={style} aria-label={title} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function ItemGrid(props: ItemGridProps) {
  return (
    <section className={props.className}>
      <div className="container">
        <div className="row">
          {props.itemList.map((item, idx) => (
            <Item key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
