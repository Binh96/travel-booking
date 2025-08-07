interface Props {
  label: string;
  border?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const ButtonComponent: React.FC<Props> = ({
  label,
  border = '1px solid #ccc',
  backgroundColor = '#f0f0f0',
  color = '#000',
  width = '100px',
  height = '40px',
  fontSize = '16px',
  fontWeight = 'normal',
  borderRadius = '4px',
  padding = '10px',
  margin = '5px',
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        border,
        backgroundColor,
        color,
        width,
        height,
        fontSize,
        fontWeight,
        borderRadius,
        padding,
        margin,
      }}
    >
      {label}
      {children}
    </button>
  );
}

export default ButtonComponent;
