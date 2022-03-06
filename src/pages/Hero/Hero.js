import React, { Fragment } from "react";
import {
  Container,
  Wrapper,
  Header,
  BalanceWrapper,
  Balance,
  BalanceTitle,
  BalanceAmount,
  Plans,
  PlansTitle,
  SaveWrapper,
  SaveCard,
  FirstContent,
  SecondContent,
} from "./HeroElements";
import header from "../../assets/header.svg";
import { BalanceData, SaveData } from "./HeroData";
const Hero = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Header>
            <img src={header} alt='img' />
            <div className='wrap'>
              <div className='text'>Hello,</div>
              <div className='name'>Oluwatobi</div>
            </div>
          </Header>
          <BalanceWrapper>
            {BalanceData.map((item) => (
              <Balance>
                <BalanceTitle>{item.title}</BalanceTitle>
                <BalanceAmount>{item.amount}</BalanceAmount>
              </Balance>
            ))}
          </BalanceWrapper>
          <Plans>
            <PlansTitle>
              <h2>Watch your plans</h2>
              <h4>A goal without a plan is just a wish</h4>
            </PlansTitle>
          </Plans>
          <SaveWrapper>
            {SaveData.map((item) => (
              <SaveCard>
                <FirstContent>
                  <div>
                    <img src={item.icon} alt='save_icon' width='40px' />
                  </div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </FirstContent>
                <SecondContent>
                  <div>
                    <h3>{item.amount}</h3>
                  </div>
                </SecondContent>
              </SaveCard>
            ))}
          </SaveWrapper>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Hero;
