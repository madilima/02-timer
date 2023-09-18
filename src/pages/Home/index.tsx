import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountImput, Separetor, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer> 
        <label htmlFor="">Vou trabalhar em </label>
        <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o projeto"/>

        <datalist id="task-suggestions">
          <option value="Projeto"></option>
        </datalist>

        <label htmlFor="">durante</label>
        <MinutesAmountImput type="number" id="minutesAmount" placeholder="00" step={5}/>
        <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton  disabled type="submit"> <Play size= {24}/> Começar </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
