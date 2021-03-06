import Input from '../../UI/Input'

import classes from './MealItemForm.module.scss'

const MealItemForm = props => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        label='Amount'
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
