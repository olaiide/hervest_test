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
  DataWrapper,
  DataCard,
  LeftContent, 
  RightContent
} from "./HeroElements";
import header from "../../assets/header.svg";
import { BalanceData, SaveData, Data } from "./HeroData";
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
              <Balance key={item.id}>
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
              <SaveCard key={item.id}>
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
                    <div className='progress'>
                      <div className='progress__bar'></div>
                    </div>
                  </div>
                </SecondContent>
              </SaveCard>
            ))}
          </SaveWrapper>
          <DataWrapper>
            {Data.map((item) => (
              <DataCard key={item.id} class={item.className}>
                <LeftContent>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </LeftContent>
                <RightContent>
                    <img src={item.icon} alt="logo"/>
                </RightContent>
              </DataCard>
            ))}
          </DataWrapper>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Hero;
