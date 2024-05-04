export default function SVGBrush(props) {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='8 5 12 12'
      width='200px'
      height='200px'
      {...rest}>
      <path
        fill='#a44c3e'
        d='m19.5 5.5c.5.5.5.5-1.5 3.5-2 3-3 4-4 5-1 0-3-2-3-3 1-1 2-2 5-4 3-2 3-2 3.5-1.5z'
      />{' '}
      <path
        fill='#d6d6de'
        d='m11 11c0 1 2 3 3 3-1 1-1 1-2 1 0-1-1-2-2-2 0-1 0-1 1-2z'
      />
      <path
        fill='#f6b87b'
        d='m10 13c1 0 2 1 2 2 0 1-1 2-2 2h-2c0-3 1-4 2-4z'
      />
    </svg>
  );
}
