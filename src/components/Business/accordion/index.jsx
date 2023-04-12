import { WrapperContainer } from "../../../App-styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "./style.module.css";
import "./acoodion.css";

function Faq() {
  return (
    <>
      <WrapperContainer>
        <div className={styled.Wrapper}>
          <h2>FAQ</h2>
          <div className={styled.accordions}>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Add commonly asked questions here</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam ut lorem qui lectus molestie malesuada vitae vel
                      purus.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nullam ut lorem qui lectus molestie malesuada vitae
                      vel purus.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nullam ut lorem qui lectus molestie
                      malesuada vitae vel purus.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam ut lorem qui lectus
                      molestie malesuada vitae
                    </p>
                    vel purus.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Add commonly asked questions here</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam ut lorem qui lectus molestie malesuada vitae vel
                      purus.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nullam ut lorem qui lectus molestie malesuada vitae
                      vel purus.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nullam ut lorem qui lectus molestie
                      malesuada vitae vel purus.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam ut lorem qui lectus
                      molestie malesuada vitae
                    </p>
                    vel purus.
                  </Typography>
                </AccordionDetails>
              </Accordion>{" "}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Add commonly asked questions here</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam ut lorem qui lectus molestie malesuada vitae vel
                      purus.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nullam ut lorem qui lectus molestie malesuada vitae
                      vel purus.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nullam ut lorem qui lectus molestie
                      malesuada vitae vel purus.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam ut lorem qui lectus
                      molestie malesuada vitae
                    </p>
                    vel purus.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default Faq;
