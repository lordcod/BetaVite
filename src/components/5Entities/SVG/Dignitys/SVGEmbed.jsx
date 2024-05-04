export default function SVGEmbed(props) {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -18 24 24'
      width='430px'
      height='180px'
      {...rest}>
      <path
        fill='#313338'
        d='M-4-15h39c1 0 2 1 2 2v14c0 1-1 2-2 2h-39c-1 0-2-1-2-2v-14c0-1 1-2 2-2z'
      />
      <path
        fill='#fff'
        d='M1 0h5c1 0 1 0 1-1 0-1 0-1-1-1h-3c-1 0-1 0-1-1v-8c0-1 0-1-1-1-1 0-1 0-1 1v10c0 1 0 1 1 1zm7-6c0-8 7-8 7 0 0 8-7 8-7 0m2 0c0 5 3 5 3 0 0-5-3-5-3 0zm7 5v-10c0-1 0-1 1-1h2c6 0 4 7 2 7 2 3 2 3 2 4 0 1 0 1-1 1-1 0-2-4-3-4-1 0-1 0-1 2v1c0 1 0 1-1 1-1 0-1 0-1-1m3-6c2 0 2-3 0-3-1 0-1 0-1 1v1c0 1 0 1 1 1zm6 6c0 1 0 1 1 1h1c7 0 7-12 0-12h-1c-1 0-1 0-1 1v10m3-1c-1 0-1 0-1-1v-6c0-1 0-1 1-1 3 0 3 8 0 8z'
      />
      <path
        fill='#694a98'
        d='m-3 3h-1c-1 0-2-1-2-2v-1c2 0 1 1 3 1v1z'
      />
      <path
        fill='#5962AA'
        d='m-3 2c-2 0-1-1-3-1v-3c2 0 1 1 3 1v2z'
      />
      <path
        fill='#497abc'
        d='m-3 0c-2 0-1-1-3-1v-3c2 0 1 1 3 1v2z'
      />
      <path
        fill='#599488'
        d='m-3 -2c-2 0-1-1-3-1v-3c2 0 1 1 3 1v2z'
      />
      <path
        fill='#68ad54'
        d='m-3 -4c-2 0-1-1-3-1v-3c2 0 1 1 3 1v2z'
      />
      <path
        fill='#AFCA4D'
        d='m-3 -6c-2 0-1-1-3-1v-3c2 0 1 1 3 1v2z'
      />
      <path
        fill='#f5e645'
        d='m-3 -8c-2 0-1-1-3-1v-3c2 0 1 1 3 1v2z'
      />
      <path
        fill='#C78B36'
        d='m-3 -10c-2 0-1-1-3-1v-2c0-1 1-2 2-2h1v5z'
      />
      <path
        fill='#983027'
        d='M-3-12c-2 0-1-1-3-1 0-1 1-2 2-2h1v3z'
      />
    </svg>
  );
}
