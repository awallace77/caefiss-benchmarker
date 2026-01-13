function Header({
  title,
  subtitle,
  desc,
}: {
  title: string;
  subtitle: string;
  desc: string;
}) {
  return (
    <>
      <h1 className="text-2xl text-center">{title.toUpperCase()}</h1>
      <h2 className="text-xl text-center">{subtitle.toUpperCase()}</h2>
      <p className="text-center text-gray-300 text-sm">{desc}</p>
    </>
  );
}

export default Header;
