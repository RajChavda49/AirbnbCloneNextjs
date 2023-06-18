import Container from "../Container";

import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { CategoryBox } from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to be beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmillFs!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathename = usePathname();

  const isMainPage = pathename === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
            key={item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;