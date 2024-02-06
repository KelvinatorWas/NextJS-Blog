import { GitHub, LinkedIn } from "@mui/icons-material";

type ItchIcon = {
  size: [w: number, h: number];
  className: string | undefined;
  color: string | undefined;
};

const ItchIo = ({ size, className, color }: ItchIcon) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size[0]}
    height={size[1]}
    fill={color ? color : "#b00000"}
    viewBox="8.226 10.91 49.755 44.078"
  >
    <path d="m14.419 10.91-6.194 7.742v2.168c0 6.193 10.116 6.193 10.116 0 0 6.193 9.703 6.193 9.703 0 0 6.193 10.116 6.193 10.116 0 0 6.193 9.704 6.193 9.704 0 0 6.193 10.115 6.193 10.115 0v-2.168l-6.193-7.742H14.419zm3.82 13.626c-.31.413-.62.722-.929 1.032-1.135.929-2.581 1.342-4.026 1.342-.413 0-.826 0-1.135-.103v28.181h41.807V26.807c-.413.103-.723.103-1.136.103-1.445 0-2.89-.413-4.026-1.342-.309-.31-.619-.62-.928-1.032-.311.413-.518.722-.93 1.032-1.136.929-2.58 1.342-3.923 1.342-1.444 0-2.89-.413-3.923-1.342-.309-.31-.619-.62-.929-1.032-.31.413-.619.722-.929 1.032-1.341 1.032-2.787 1.445-4.232 1.445s-2.89-.413-4.026-1.342c-.31-.31-.619-.619-.929-1.032-.31.413-.516.723-.929 1.032-1.136.929-2.581 1.342-3.923 1.342-1.445 0-2.89-.413-3.922-1.342-.31-.31-.619-.619-.929-1.032l-.103-.103zm5.574 4.232c2.374 0 3.406.62 4.645 3.097h9.187c.517-2.477 1.549-3.097 4.646-3.097 2.373 0 6.399 2.271 7.019 5.471l3.097 12.078c.619 3.097-1.135 5.367-4.232 5.367-2.168 0-4.955-1.445-6.812-5.367H24.845c-1.858 4.025-4.645 5.367-6.813 5.367-3.097 0-4.852-2.271-4.232-5.367l3.097-12.078c.619-3.2 4.645-5.471 7.019-5.471h-.103zM33 33l-7.329 7.742h3.097v3.922h8.568v-3.818h3.096L33 33z" />
  </svg>
);

const Socials = {
  navs: [
    {
      href: "https://github.com/KelvinatorWas",
      icon: (
        <GitHub className="fill-white hover:scale-125 transition-all ease duration-300" />
      ),
    },
    {
      href: "https://www.linkedin.com/in/kalvisliepkalns/",
      icon: (
        <LinkedIn className="fill-blue-200 hover:scale-125 transition-all ease duration-300" />
      ),
    },
    {
      href: "https://tmtext.itch.io/",
      icon: (
        <ItchIo
          size={[24, 24]}
          className="hover:scale-125 transition-all ease duration-300"
          color={undefined}
        />
      ),
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="flex mt-4 px-5 py-4 bg-tpurple text-lblue border-t-2 border-black shadow shadow-black">
      <div className="flex flex-col flex-grow items-center gap-2.5">
        <div>Footer</div>
        <div className="flex flex-grow justify-end items-center gap-2">
          {Socials.navs.map((social, index) => {
            return (
              <a key={index} href={social.href} target="_blank">
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
