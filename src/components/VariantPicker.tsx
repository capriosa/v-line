

const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === 0)
    return <p className="text-sm text-gray-300">One size</p>;

  return (
    <select
      {...props}
      
    >
      {variants.map(({ external_id, name }) => (
        <option key={external_id} value={external_id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default VariantPicker;
