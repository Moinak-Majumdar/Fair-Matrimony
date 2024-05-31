import { Context, ReactNode, createContext, useContext, useMemo } from "react";
import { Groom } from "../model/model";
import jsonData from "../data/grooms.json"


interface DateSet { [key: string]: string }
type CalculationType = { calculateDowry: (g: Groom) => Promise<number>, dowryOptions: string[] }
type cp_res = { age: number, profession: number, salary: number, education: number, residence: number, country: number }


//fnc to count no of occurrence where elm's value = val 
function count(elm: string, val: string) {
    let c = 0
    for (const item of DATA_SET) {
        if (item[elm] == val) c++
    }
    return c
}



let CalculationContext: Context<CalculationType>

const DATA_SET: DateSet[] = [...jsonData]

const Calculation = ({ children }: { children: ReactNode }) => {

    const dowryOptions = ['Less than 50K', '75K - 1 Lakhs', '1.5 - 2 Lakhs', '2 - 3 Lakhs', '3.5 - 4 Lakhs', '5 - 6 Lakhs'];

    // count of all dowry options from dataset.
    const d_1_count = useMemo(() => count('dowry', dowryOptions[0]), [DATA_SET])
    const d_2_count = useMemo(() => count('dowry', dowryOptions[1]), [DATA_SET])
    const d_3_count = useMemo(() => count('dowry', dowryOptions[2]), [DATA_SET])
    const d_4_count = useMemo(() => count('dowry', dowryOptions[3]), [DATA_SET])
    const d_5_count = useMemo(() => count('dowry', dowryOptions[4]), [DATA_SET])
    const d_6_count = useMemo(() => count('dowry', dowryOptions[5]), [DATA_SET])

    function conditionalProbability(elm: string, val: string, conElm: string, conVal: string, conCount: number) {
        let c = 0;
        for (const item of DATA_SET) {
            if (item[elm] == val && item[conElm] == conVal) c++
        }
        return c / conCount
    }


    async function calculateDowry(g: Groom): Promise<number> {

        const res: cp_res[] = [];

        // probability of getting dowry of options[1]
        res.push({
            age: conditionalProbability('age', g.age, 'dowry', dowryOptions[0], d_1_count),
            country: conditionalProbability('country', g.country, 'dowry', dowryOptions[0], d_1_count),
            education: conditionalProbability('education', g.education, 'dowry', dowryOptions[0], d_1_count),
            profession: conditionalProbability('profession', g.profession, 'dowry', dowryOptions[0], d_1_count),
            residence: conditionalProbability('residence', g.residence, 'dowry', dowryOptions[0], d_1_count),
            salary: conditionalProbability('salary', g.salary, 'dowry', dowryOptions[0], d_1_count),
        })

        // probability of getting dowry of options[2]
        res.push({
            age: conditionalProbability('age', g.age, 'dowry', dowryOptions[1], d_2_count),
            country: conditionalProbability('country', g.country, 'dowry', dowryOptions[1], d_2_count),
            education: conditionalProbability('education', g.education, 'dowry', dowryOptions[1], d_2_count),
            profession: conditionalProbability('profession', g.profession, 'dowry', dowryOptions[1], d_2_count),
            residence: conditionalProbability('residence', g.residence, 'dowry', dowryOptions[1], d_2_count),
            salary: conditionalProbability('salary', g.salary, 'dowry', dowryOptions[1], d_2_count),
        })

        // probability of getting dowry of options[3]
        res.push({
            age: conditionalProbability('age', g.age, 'dowry', dowryOptions[2], d_3_count),
            country: conditionalProbability('country', g.country, 'dowry', dowryOptions[2], d_3_count),
            education: conditionalProbability('education', g.education, 'dowry', dowryOptions[2], d_3_count),
            profession: conditionalProbability('profession', g.profession, 'dowry', dowryOptions[2], d_3_count),
            residence: conditionalProbability('residence', g.residence, 'dowry', dowryOptions[2], d_3_count),
            salary: conditionalProbability('salary', g.salary, 'dowry', dowryOptions[2], d_3_count),
        })

        // probability of getting dowry of options[4]
        res.push({
            age: conditionalProbability('age', g.age, 'dowry', dowryOptions[3], d_4_count),
            country: conditionalProbability('country', g.country, 'dowry', dowryOptions[3], d_4_count),
            education: conditionalProbability('education', g.education, 'dowry', dowryOptions[3], d_4_count),
            profession: conditionalProbability('profession', g.profession, 'dowry', dowryOptions[3], d_4_count),
            residence: conditionalProbability('residence', g.residence, 'dowry', dowryOptions[3], d_4_count),
            salary: conditionalProbability('salary', g.salary, 'dowry', dowryOptions[3], d_4_count),
        })


        // probability of getting dowry of options[5]
        res.push({
            age: conditionalProbability('age', g.age, 'dowry', dowryOptions[4], d_5_count),
            country: conditionalProbability('country', g.country, 'dowry', dowryOptions[4], d_5_count),
            education: conditionalProbability('education', g.education, 'dowry', dowryOptions[4], d_5_count),
            profession: conditionalProbability('profession', g.profession, 'dowry', dowryOptions[4], d_5_count),
            residence: conditionalProbability('residence', g.residence, 'dowry', dowryOptions[4], d_5_count),
            salary: conditionalProbability('salary', g.salary, 'dowry', dowryOptions[4], d_5_count),
        })

        // probability of getting dowry of options[6]
        res.push({
            age: conditionalProbability('age', g.age, 'dowry', dowryOptions[5], d_6_count),
            country: conditionalProbability('country', g.country, 'dowry', dowryOptions[5], d_6_count),
            education: conditionalProbability('education', g.education, 'dowry', dowryOptions[5], d_6_count),
            profession: conditionalProbability('profession', g.profession, 'dowry', dowryOptions[5], d_6_count),
            residence: conditionalProbability('residence', g.residence, 'dowry', dowryOptions[5], d_6_count),
            salary: conditionalProbability('salary', g.salary, 'dowry', dowryOptions[5], d_6_count),
        })

        const p_of_getting_d1 = res[0].age * res[0].country * res[0].education * res[0].profession * res[0].residence * res[0].salary;
        const p_of_getting_d2 = res[1].age * res[1].country * res[1].education * res[1].profession * res[1].residence * res[1].salary;
        const p_of_getting_d3 = res[2].age * res[2].country * res[2].education * res[2].profession * res[2].residence * res[2].salary;
        const p_of_getting_d4 = res[3].age * res[3].country * res[3].education * res[3].profession * res[3].residence * res[3].salary;
        const p_of_getting_d5 = res[4].age * res[4].country * res[4].education * res[4].profession * res[4].residence * res[4].salary;
        const p_of_getting_d6 = res[5].age * res[5].country * res[5].education * res[5].profession * res[5].residence * res[5].salary;

        // probability array
        const prob = [p_of_getting_d1, p_of_getting_d2, p_of_getting_d3, p_of_getting_d4, p_of_getting_d5, p_of_getting_d6]


        return prob.indexOf(Math.max(...prob))
    }

    const value: CalculationType = {
        calculateDowry,
        dowryOptions,
    }

    CalculationContext = createContext(value)

    return (
        <CalculationContext.Provider value={value}>
            {children}
        </CalculationContext.Provider>
    )
}

export function useCalculation() {
    return useContext(CalculationContext);
}

export default Calculation

