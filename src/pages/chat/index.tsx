import { Helmet } from 'react-helmet-async'
import user from './../../assets/user.jpg'

export const Chat = () => {
  return (
    <>
      <Helmet title="Chat" />
      <div className="grid h-screen grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <aside className="col-span-1 flex h-screen flex-col border md:col-span-2">
          <div className="flex items-center gap-4 border-b p-4">
            <img src={user} className="size-12 rounded-full border" />
            <span className="text-lg font-medium text-zinc-700">
              Giovanni Marques
            </span>
          </div>

          <span className="border-b p-4 text-center font-medium text-zinc-700">
            Participants online - (28)
          </span>

          <div className="overflow-y-auto px-4">
            {Array.from({ length: 13 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b py-4"
              >
                <img src={user} className="size-10 rounded-full border" />
                <span className="text-medium text-zinc-700">
                  Fernando Alvaroni
                </span>
              </div>
            ))}
          </div>
        </aside>

        <main className="col-span-10 flex h-screen flex-col">
          <div className="border-b p-[16.5px]">
            <img src="src/assets/talkspace.svg" alt="logo" className="m-auto" />
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-4">
            <div className="flex flex-row-reverse items-center gap-4 p-2">
              <img src={user} className="size-12 rounded-full border" />
              <div className="w-[800px]">
                <span className="block text-right text-lg font-medium text-zinc-700">
                  Giovanni Marques
                </span>
                <p className="text-md text-right text-zinc-500">Bom dia!</p>
              </div>
            </div>

            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-2">
                <img src={user} className="size-12 rounded-full border" />
                <div className="w-[800px]">
                  <span className="text-lg font-medium text-zinc-700">
                    Giovanni Marques
                  </span>
                  <p className="text-md break-words text-zinc-500">
                    Bom
                    diaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 border-t p-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9747FF] disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              className="rounded-md bg-[#9747FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#9747FF]/90 disabled:pointer-events-none disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
