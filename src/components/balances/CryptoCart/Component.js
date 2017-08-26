import React, { Component } from 'react'
import { map, values, keys } from 'lodash'
import classnames from 'classnames'

import timeFormat from 'utils/timeFormat'
import { Input } from 'components/fields'
import { CustomComponent, Button, Icon } from 'components'
import numberFormat from 'utils/numberFormat'

class CryptoCart extends CustomComponent.ForManage {
  confirmEdit(values) {
    this.props.handleSubmit(values)
    .then((response) => {
      this.props.submitSucceeded && this.setState({ editTools: false })
    })
  }

  render () {
    const { name, amount, pricePerItem, currentPricePerItem, invested, currentBalancePrice, profitPercent, currentProfitPercent, updatedAt } = this.props
    const { isActiveTools, editTools, removeTools } = this.state
    const { toggleTools, toggleEdit, toggleRemove, confirmRemove, confirmEdit } = this

    return (
      <form className='crypto-cart' onSubmit={confirmEdit}>
        <div onClick={toggleTools} className={`icon-wrap crypto-cart-header crypto-color-${name.toLowerCase()}`}>
          <h3>{ name }</h3>
          <div className='crypto-cart__toggle-wrap'>
            <span>{ amount }</span>
            <Icon type='ChevronDown' className={classnames('crypto-cart__toggle-icon white__theme', { 'crypto-cart__toggle-icon--active': isActiveTools })} />
          </div>
        </div>

        <div className={classnames('crypto-cart-info crypto-cart-tools', { 'crypto-cart-tools--active' : isActiveTools })}>
          <span className='crypto-cart-tools__title'>
            { !editTools && !removeTools && `Last update: ${timeFormat.details(updatedAt)}` }
            { editTools && 'Save changes?' }
            { removeTools && 'Remove balance?' }
          </span>

          { !editTools && !removeTools &&
            <div className='crypto-cart-tools__actions'>
              <Icon onClick={toggleEdit} type='Edit' size={27} className='crypto-cart-tools__action white__theme' />
              <Icon onClick={toggleRemove} type='Trash' size={27} className='crypto-cart-tools__action white__theme' />
            </div>
          }

          { editTools &&
            <div className='crypto-cart-tools__actions crypto-cart-tools__edit'>
              <Button onClick={confirmEdit} className='crypto-cart-tools__button green__theme constant'>Confirm</Button>
              <Button onClick={toggleEdit} className='crypto-cart-tools__button red__theme constant'>Cancel</Button>
            </div>
          }

          { removeTools &&
            <div className='crypto-cart-tools__actions crypto-cart-tools__edit'>
              <Button onClick={confirmRemove} className='crypto-cart-tools__button green__theme constant'>Confirm</Button>
              <Button onClick={toggleRemove} className='crypto-cart-tools__button red__theme constant'>Cancel</Button>
            </div>
          }
        </div>

        { editTools &&
          <div>
            <div className='crypto-cart-info crypto-cart__field-wrap'>
              <div className='crypto-cart-column'>
                <span className='crypto-cart-name'>Amount</span>
                <span className='crypto-cart__field'>
                  <Input name='amount' step='0.1' className='purple__theme' type='number' placeholder='amount' />
                </span>
              </div>
            </div>

            <div className='crypto-cart-info crypto-cart__field-wrap'>
              <div className='crypto-cart-column'>
                <span className='crypto-cart-name'>Invested</span>
                <span className='crypto-cart__field'>
                  <Input name='invested' step='0.1' className='orange__theme' type='number' placeholder='invested' />
                </span>
              </div>
            </div>

            <div className='crypto-cart-info crypto-cart__field-wrap'>
              <div className='crypto-cart-column'>
                <span className='crypto-cart-name'>Expected profit</span>
                <span className='crypto-cart__field'>
                  <Input name='profitPercent' step='0.1' className='blue__theme' type='number' placeholder='profit percent' />
                </span>
              </div>
            </div>
          </div>
        }


        { !editTools &&
          <div>
            <div className='crypto-cart-info'>
              <div className='crypto-cart-column'>
                <span className='crypto-cart-name'>Purchase rate</span>
                <span className='crypto-cart-value'>
                  {numberFormat.USD(pricePerItem)}
                </span>
              </div>

              <div className='crypto-cart-column'>
                <span className='crypto-cart-name crypto-cart-name__right'>Current rate</span>
                <span className='crypto-cart-value'>
                  {numberFormat.USD(currentPricePerItem)}
                </span>
              </div>
            </div>

            <div className='crypto-cart-info'>
              <div className='crypto-cart-column'>
                <span className='crypto-cart-name'>Invested</span>
                <span className='crypto-cart-value'>
                  {numberFormat.USD(invested)}
                </span>
              </div>

              <div className='crypto-cart-column'>
                <span className='crypto-cart-name crypto-cart-name__right'>Current cost</span>
                <span className='crypto-cart-value'>
                  {numberFormat.USD(currentBalancePrice)}
                </span>
              </div>
            </div>

            <div className='crypto-cart-info'>
              <div className='crypto-cart-column'>
                <span className='crypto-cart-name'>Expected profit</span>
                <span className='crypto-cart-value'>
                  {numberFormat.percent(profitPercent)}
                </span>
              </div>

              <div className='crypto-cart-column'>
                <span className='crypto-cart-name crypto-cart-name__right'>Current profit</span>
                <span className={classnames('crypto-cart-value crypto-cart-value__profit', { 'positive': currentProfitPercent > 0, 'profit': currentProfitPercent >= profitPercent })}>
                  {numberFormat.percent(currentProfitPercent)}
                  </span>
              </div>
            </div>
          </div>
        }

      </form>
    )
  }
}


export default CryptoCart
