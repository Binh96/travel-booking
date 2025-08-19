interface CardComponentProps {
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  margin?: string;
  padding?: string;
  children?: React.ReactNode;
}

export default function CardComponent(props: CardComponentProps) {
  return (
    <div className="card" 
      style={{
        border: props.border,
        borderRadius: props.borderRadius,
        boxShadow: props.boxShadow,
        margin: props.margin,
        padding: props.padding,
    }}>
      {props.children}
    </div>
  );
}