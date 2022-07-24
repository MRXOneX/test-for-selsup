import { useState, useEffect } from 'react'


interface Param {
  id: number;
  name: string;
  type: string
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValue: ParamValue[];
}




const params = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string'
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string'
  }
]




function App() {
  const [values, setValues] = useState<Array<ParamValue>>([])

  const getModel = (): Model => ({
    paramValue: [
      {
        paramId: 1,
        value: 'повседневное'
      },
      {
        paramId: 2,
        value: 'макси'
      }
    ]
  })


  const model: Model = getModel()

  useEffect(() => {
    setValues(model.paramValue)
  }, [])

  
  const onChangeParamValue = (word: string, id: number) => {
    setValues(prev => prev.map(el => {
      if (el.paramId === id) {
        return {
          ...el,
          value: word
        }
      }
      return el
    }))
  }

  return (
    <div className="App">
      {params && params.map((param: Param) => {

        const paramValue = values.find(value => value.paramId === param.id)
        return (
          <div key={param.id}>
            <span>{param.name}</span>
            <input 
              type={param.type} 
              value={paramValue?.value}  
              onChange={e => onChangeParamValue(e.target.value, param.id)}
              />
          </div>
        )
      })}
    </div>
  );
}

export default App;
