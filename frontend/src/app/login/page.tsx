export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">
        This is the login page
      </h1>

      <fieldset className="fieldset w-full max-w-sm">
        <legend className="fieldset-legend text-lg font-medium mb-2">
          What is your name?
        </legend>
        <input type="text" className="input input-bordered w-full mb-2" placeholder="Type here" />
        <p className="label text-sm text-gray-500">Optional</p>
      </fieldset>
    </div>
  );
}
