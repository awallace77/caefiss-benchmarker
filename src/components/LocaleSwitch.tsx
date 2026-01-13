function LocaleSwitch({
  label,
  onSwitch,
}: {
  label: string;
  onSwitch: () => void;
}) {
  return (
    <>
      <a
        className="text-sm text-gray-400 underline hover:text-(--coolor-blue) cursor-pointer"
        onClick={onSwitch}
      >
        {label}
      </a>
    </>
  );
}

export default LocaleSwitch;
