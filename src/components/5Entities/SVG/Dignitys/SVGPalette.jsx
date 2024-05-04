export default function SVGPalette(props) {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 16'
      width='500px'
      height='400px'
      {...rest}>
      <path
        fill='#D0B08A'
        d='M16 2c-2-2-6-2-9-1-6 2-8 7-6 11 2 4 9 5 13 3 4-2 6-4 5-6-1-2-3 1-4-1-1-2 3-4 1-6m-4 0a1 1 0 01-2 4 1 1 0 012-4zm2 9a1 1 0 00-1 3 1 1 0 001-3zm-10-6a1 1 0 00-1 3 1 1 0 001-3zm-2 6a1 1 0 003 1 1 1 0 00-3-1zm5 2a1 1 0 003 1 1 1 0 00-3-1'
      />

      <path
        fill='#983027'
        d='M4 4A1 1 0 003 7 1 1 0 004 4Z'
      />
      <path
        fill='#f5e645'
        d='M2 8A1 1 0 003 11 1 1 0 002 8Z'
      />
      <path
        fill='#68ad54'
        d='M4 12A1 1 0 007 13 1 1 0 004 12Z'
      />
      <path
        fill='#497abc'
        d='M11 14A1 1 0 008 13 1 1 0 0011 14Z'
      />
      <path
        fill='#694a98'
        d='M12 13A1 1 0 0015 12 1 1 0 0012 13Z'
      />
    </svg>
  );
}
