function SerchInput({ value, setValue }: any) {
  const handle = (e: any) => setValue(e.target.value);
  return <input value={value} onChange={handle} />;
}

export default SerchInput;
