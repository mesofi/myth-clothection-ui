import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import axios from "axios";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import MythClothBox from "@/components/MythClothBox";

export default function IndexPage() {
  const [characters, setCharacters] = useState([]);

  React.useEffect(() => {
    axios.get("http://127.0.0.1:8080/characters").then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
        <div className="mt-8">
          <MythClothBox borderColor="#111111" />
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Id</TableColumn>
              <TableColumn>Box</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Price</TableColumn>
            </TableHeader>
            <TableBody>
              {characters.map((figure: MythCharacterFigure) => {
                return (
                  <TableRow key={figure.id}>
                    <TableCell>{figure.id}</TableCell>
                    <TableCell>
                      <MythClothBox borderColor={figure.boxStyle.borderColor} />
                    </TableCell>
                    <TableCell>{figure.officialName}</TableCell>
                    <TableCell>{figure.distributionJPY.releasePrice}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </DefaultLayout>
  );
}
