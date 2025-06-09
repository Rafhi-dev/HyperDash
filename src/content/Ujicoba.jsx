import Input from "../components/form/input";
import Select from "../components/form/Select";

const Ujicoba = () => {

     const countries = [
    { value: '', label: 'Select a country' },
    { value: 'us', label: 'United States' },
    { value: 'id', label: 'Indonesia' },
    { value: 'uk', label: 'United Kingdom' },
  ];

  return (
    <div className="h-full">
      <div className="bg-gradient-to-r from-slate-800/90 to-slate-600/90 pt-8 h-40">
        <p className="text-white text-4xl antialiased font-semibold text-center">Layout 1</p>
      </div>
      {/* area 1 */}
      <div className="flex flex-col sm:flex-row gap-4 -mt-6 m-4 z-10">
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <p>Ini adalah konten pertama</p>
        </div>
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <p>Ini adalah konten kedua</p>
        </div>
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <p>Ini adalah konten ketiga</p>
        </div>
      </div>
      {/* area 2 */}
      <div className="flex m-4 gap-4">
        <div className="w-2/3 bg-blue-100 rounded-lg shadow-md p-4">
          <p>koneten ke 4</p>
        </div>
        <div className="w-1/3 bg-blue-200 rounded-lg shadow-md p-4">
          <p>Konten ke 5</p>
        </div>
      </div>
      {/* area 3 */}
      <div className="flex m-4 gap-4">
        <div className="w-full bg-white rounded-lg shadow-md p-4 h-screen">
          <p>Konten ke 6</p>
          <Input label={"Username"} disabled={true} name={"input"} placeholder={"input 1"} />
          <Select name={"country"} options={countries} />

        </div>
      </div>
      
      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} HyperDash.
      </footer>
    </div>
    
  );
};

export default Ujicoba;
