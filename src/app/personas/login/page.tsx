import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-screen w-1/2 flex-col justify-center space-y-4  bg-white  px-16">
        <h2 className="mb-8 text-3xl font-thin">
          Ingresá tus datos para operar
        </h2>
        <form className="mt-4 flex flex-col ">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            placeholder="Ingresa tu email"
            type="email"
            className="my-2 rounded-lg border bg-gray-100 p-3 invalid:border-pink-500 invalid:text-pink-600 focus:border-lime-500 focus:bg-lime-500/5
                focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <label htmlFor="pin" className="mt-4 text-sm font-medium">
            PIN
          </label>
          <input
            placeholder="Ingresa el PIN de 4 digitos"
            type="number"
            className="mt-2 rounded-lg border bg-gray-100 p-3 invalid:border-pink-500 invalid:text-pink-600 focus:border-lime-500 focus:bg-lime-500/5
            focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <div className="mt-10">
            <p className="rounded-lg bg-lime-100/50 p-4 text-sm">
              Nunca compartas por teléfono, email o redes sociales tu Token de
              seguridad,ni tus claves. &nbsp;
              <span className="cursor-pointer text-lime-500 underline">
                Conocé más consejos de seguridad
              </span>
            </p>
          </div>
          <button
            className="group relative mt-10   overflow-hidden
            rounded-full bg-lime-500 py-4 
            px-8 font-semibold transition-all duration-200 ease-linear hover:bg-lime-400"
          >
            <div className="absolute h-[500px] w-[200px] -translate-x-96 -translate-y-40 rotate-45 bg-lime-500 transition-all duration-[.8s] ease-[cubic-bezier(0.65,0,.076,1)] group-hover:translate-x-[25rem]"></div>
            Ingresar
          </button>
          <p className="mt-4 rounded-lg p-4 text-base">
            Si no tenés u olvidaste tu clave y/o usuario &thinsp;
            <Link
              href="/personas/registro"
              className="block cursor-pointer text-lime-500 underline"
            >
              Crear clave y usuario
            </Link>
          </p>
        </form>
      </div>
      <div className="h-screen w-full bg-lime-500"></div>
    </div>
  );
}
