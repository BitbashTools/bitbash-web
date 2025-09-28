import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Faqs.css";
import faqdata from "../../data/faq.json";

function Faqs() {
  const [expandedIndex, setExpandedIndex] = useState();

  const handleClick = (index) => {
    setExpandedIndex(index);
  };
  const questions = faqdata;
  const firstHalf = questions.slice(0, Math.ceil(questions.length / 2));
  const secondHalf = questions.slice(Math.ceil(questions.length / 2));

  const renderItems = (items, offset = 0) => {
    return items.map((item, index) => (
      <AccordionItem
        key={index + offset}
        className="accordion-item"
        border={"1px solid white"}
        borderRadius={"30px"}
        padding={"20px 30px"}
        marginTop={"20px"}
        maxWidth={"100%"}
        onClick={() => handleClick(index + offset)}
      >
        <h2 className="text-xl">
          <AccordionButton
            textColor={"black"} // Changed from white to black
            className="hover:text-indigo-600"
            _expanded={{ color: "#4C39F0" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={"3xl"}
              fontWeight={"bold"}
            >
              {item.question}
            </Box>
            <AccordionIcon fontSize={"3xl"} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="text-black"> {/* Changed from white to black */}
          {item.answer}
        </AccordionPanel>
      </AccordionItem>
    ));
  };
  return (
    <>
      <SimpleGrid columns={2} spacing={10} className="accordion-grid">
        <Accordion allowToggle>
          <div>{renderItems(firstHalf)}</div>
        </Accordion>
        <Accordion allowToggle>
          <div>{renderItems(secondHalf, Math.ceil(questions.length / 2))}</div>
        </Accordion>
      </SimpleGrid>
    </>
  );
}

export default React.memo(Faqs);
