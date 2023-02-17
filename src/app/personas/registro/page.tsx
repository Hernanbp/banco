import Link from "next/link";

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center  text-black md:mt-20 md:py-16">
      <div className="flex h-full w-full max-w-[1200px] items-center">
        <form className="flex w-full flex-col rounded-lg border border-gray-100 bg-white p-10 drop-shadow-sm">
          <h2 className="mb-4 mt-2 text-4xl font-bold">Registro</h2>
          <p className="mb-14 mt-2 text-black">
            Ya sos cliente?&thinsp;
            <Link href="/personas" className="text-lime-500 underline">
              Ingresa a tu cuenta
            </Link>
          </p>
          <div className="flex gap-4">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
              </label>
              <input
                placeholder="Ingresa tu nombre"
                type="text"
                className="mt-2 rounded-lg border bg-gray-100 p-3 invalid:border-pink-500 invalid:text-pink-600 focus:border-lime-500 focus:bg-lime-500/5
                focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="apellido" className="text-sm font-medium">
                Apellido
              </label>
              <input
                type="text"
                placeholder="Ingresa tu apellido"
                className="mt-2 rounded-lg border bg-gray-100 p-3 invalid:border-pink-500 invalid:text-pink-600 focus:border-lime-500 focus:bg-lime-500/5
                focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="usuario@email.com"
                className="mt-2 rounded-lg border bg-gray-100 p-3 invalid:border-pink-500 invalid:text-pink-600 focus:border-lime-500 focus:bg-lime-500/5
                focus:outline-none focus:invalid:border-pink-500 focus:invalid:bg-pink-500/5 focus:invalid:ring-pink-500"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="fechanacimiento" className="text-sm font-medium">
                Fecha de nacimiento
              </label>
              <input
                placeholder="20/07/1991"
                type="date"
                className="mt-2 rounded-lg border bg-gray-100 p-3 invalid:border-pink-500 invalid:text-pink-600 focus:border-lime-500 focus:bg-lime-500/5
                focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="pin" className="text-sm font-medium">
              PIN
            </label>
            <input
              maxLength={4}
              type="number"
              placeholder="Ingresa un pin de 4 digitos"
              className="mt-2 rounded-lg border bg-gray-100 p-3 invalid:border-pink-500 invalid:text-pink-600 focus:border-lime-500 focus:bg-lime-500/5
              focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-black">
              Al clickear registrarme aceptas los &thinsp;
              <Link href="/personas" className="text-lime-500 underline">
                terminos y condiciones
              </Link>
              .
            </p>
            <button
              className="group relative w-[10rem] overflow-hidden
            rounded-full bg-lime-500 py-4 
            px-8 font-medium transition-all duration-200 ease-linear hover:bg-lime-400"
            >
              <div className="absolute h-[500px] w-[200px] -translate-x-96 -translate-y-40 rotate-45 bg-lime-500 transition-all duration-[.8s] ease-[cubic-bezier(0.65,0,.076,1)] group-hover:translate-x-60"></div>
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
