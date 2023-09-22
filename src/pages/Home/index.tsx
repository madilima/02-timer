import { useForm } from 'react-hook-form';
import { Play } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'
import { CountdownContainer,
    FormContainer, 
    HomeContainer,
    MinutesAmountImput,
    Separetor, 
    StartCountdownButton,
    TaskInput } from "./styles";

const newCycleFormvalidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  MinutesAmount: zod.number().min(0).max(60),
})

export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormvalidationSchema),
  })

    function handleCreatNewCycle(data: any) {
      console.log(data)
    }
      console.log(formState.errors)

    const task = watch('task')
    const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreatNewCycle)} action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em </label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto"></option>
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountImput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Começar{" "}
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
