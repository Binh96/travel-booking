interface CardComponentProps {
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  children?: React.ReactNode;
}

export default function CardComponent(props: CardComponentProps) {
  return (
    <div className="card" 
      style={{
        border: props.border,
        borderRadius: props.borderRadius,
        boxShadow: props.boxShadow,
    }}>
      {props.children}
    </div>
  );
}