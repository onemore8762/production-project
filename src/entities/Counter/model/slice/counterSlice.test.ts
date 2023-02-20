import { counterActions, counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { type CounterSchema } from 'entities/Counter'

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state = { value: 10 }

        expect(counterReducer(state as CounterSchema, counterActions.decrement()))
            .toEqual({ value: 9 })
    })
    test('increment', () => {
        const state = { value: 10 }

        expect(counterReducer(state as CounterSchema, counterActions.increment()))
            .toEqual({ value: 11 })
    })
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 })
    })
})
