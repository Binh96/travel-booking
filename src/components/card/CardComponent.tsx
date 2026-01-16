interface CardComponentProps {
  id: number;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  margin?: string;
  padding?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  children?: React.ReactNode;
  className?: string;
}

export default function CardComponent(props: CardComponentProps) {
  return (
    <div 
      className={`card ${props.className}`}
      key={props.id}
      style={{
        border: props.border,
        borderRadius: props.borderRadius,
        boxShadow: props.boxShadow,
        margin: props.margin,
        padding: props.padding,
        textAlign: props.textAlign
    }}>
      {props.children}
    </div>
  );
}