import NextLink from 'next/link';

function SideBarOption({ name, isActive, path }) {
  return (
    <NextLink href={path}>
      <a
        className={`mb-1 block cursor-pointer px-1 py-2 text-sm font-medium transition-all hover:bg-green-50 md:px-3 md:text-base  ${
          isActive && 'border-l-4 border-green-600 bg-green-50 text-green-600'
        } `}
      >
        {name}
      </a>
    </NextLink>
  );
}

export default SideBarOption;
