'use client'
import ButtonDark from "@/components/ButtonDark";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Image from "next/image";
import Link from "next/link";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const carousel: string[] = [
    "/carousel/app.webp",
    "/carousel/gift.webp",
    "/carousel/payment.webp",
    "/carousel/post.webp",
    "/carousel/send.webp",
  ];
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <section className="flex h-[950px]">
          <div className="absolute w-full md:w-[950px] h-[950px] left-0 xl:left-1/2">
            <Spline scene="https://prod.spline.design/FgJc1XKAdQSxIDto/scene.splinecode" />
          </div>
          <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1 className="text-white font-bold text-[50px] sm:text-[100px] md:text-[150px] font-poppins drop-shadow-2xl tracking-widest leading-none">Giftme</h1>
            <h2 className="text-white font-normal text-[40px] sm:text-[70px] md:text-[100px] font-poppins drop-shadow-lg tracking-tighter leading-none">Tu aliado</h2>
          </div>
      </section>
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="max-w-[700px] text-center">
            <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400">
              Features
            </p>
            <h2 className="mb-6 text-3xl font-bold">Why is it so great?</h2>
            <p className="mb-16 text-neutral-500 dark:text-neutral-300">
              Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
              iaculis malesuada. Aenean gravida magna orci, non efficitur est
              porta id. Donec magna diam.
            </p>
          </div>
        </div>

        <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Support 24/7</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Pellentesque mollis, metus nec fringilla aliquam
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Tracking</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Magna lacus iaculis elit, quis pharetra varius.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Reporting</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Pellentesque varius ex vel consequat quis.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Analytics</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Vestibulum gravida iaculis nisl, vel lobortis eros.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Huge community</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Praesent vulputate lacus bibendum augue .
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Easy to use</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Frequent updates</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Aenean lectus ex, placerat id tellus in eros.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#169f4d"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Responsive</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Donec consequat orci quis volutpat imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32 text-center lg:text-left">
    <div className="py-12 px-6 md:px-12">
      <div className="container mx-auto xl:px-32">
        <div className="grid items-center lg:grid-cols-2">
          <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div
              className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                Anna Doe
              </h2>
              <p className="mb-4 font-semibold">Graphic designer</p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                Ad, at blanditiis quaerat laborum officia incidunt
                cupiditate dignissimos voluptates eius aliquid minus
                praesentium! Perferendis et totam ipsum ex aut earum libero
                accusamus voluptas quod numquam saepe, consequuntur nihil
                quia tenetur consequatur. Quis, explicabo deserunt quasi
                assumenda ea maiores nulla, et dolor saepe praesentium natus
                error reiciendis voluptas iste. Esse, laudantium ipsum
                animi, quos voluptatibus atque vero repellat sit eligendi
                autem maiores quasi cum aperiam. Aperiam rerum culpa
                accusantium, ducimus deserunt aliquid alias vitae quasi
                corporis placeat vel maiores explicabo commodi!
              </p>
              <ul className="flex justify-center lg:justify-start">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    className="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    className="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    className="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    className="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    className="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <Image width={488} height={732} src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/080.jpg"
              className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
      <section className="mb-32 text-center">
        <h2 className="mb-16 text-3xl font-medium">
          Trusted by <strong>2,000,000+</strong> users
        </h2>

        <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-12 lg:mb-0">
            <Image
              width={206}
              height={42}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/2.png"
              className="px-6 dark:brightness-150 md:px-12"
              alt="Nasa - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <Image
              width={206}
              height={42}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/1.png"
              className="px-6 dark:brightness-150 md:px-12"
              alt="Amazon - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <Image
              width={206}
              height={42}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/3.png"
              className="px-6 dark:brightness-150 md:px-12"
              alt="Nike - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <Image
              width={206}
              height={42}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/4.png"
              className="px-6 dark:brightness-150 md:px-12"
              alt="Ikea - logo"
            />
          </div>
        </div>
      </section>
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form className="flex flex-col gap-2">
              <Input id="name" type="text" label="Nombre" placeholder="Nombre" />
              <Input id="email" type="email" label="Correo electronico" placeholder="Correo electronico" />
              <TextArea id="message" label="Mensaje" placeholder="Mensaje" />
              <ButtonDark>
                Enviar
              </ButtonDark>
            </form>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Technical support
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      support@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Sales questions
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      sales@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">Press</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      press@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">Bug report</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      bugs@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
