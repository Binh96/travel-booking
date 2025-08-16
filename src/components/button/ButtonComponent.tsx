interface Props {
  label: string;
  border?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const ButtonComponent: React.FC<Props> = ({
  label,
  border = '',
  backgroundColor = '',
  color = '#000',
  width = '',
  height = '',
  fontSize = '16px',
  fontWeight = 'normal',
  fontFamily = 'Google Sans',
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
        fontFamily
      }}
    >
      {label}
      {children}
    </button>
  );
}

export default ButtonComponent;
