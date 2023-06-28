export default function TextInput() {
  return (
    <div className="w-full">
      <label>Label</label>
      <br />
      <input
        className="border mt-2 py-2 px-3 rounded-lg w-full"
        disabled
        value="Textbox"
      />
    </div>
  );
}
