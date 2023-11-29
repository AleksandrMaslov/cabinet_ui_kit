import { FC } from 'react'

import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Img from '../Img/Img'

import classes from './SpaceCard.module.css'

interface ISpace {
  name: string
  img: string
  area: string
  workspaces: string
  screen: boolean
  ownMeeting: boolean
  options: string[]
  price: {
    monthly: number
    quarterly: number
    yearly: number
  }
}

interface SpaceCardProps {
  space: ISpace
  onBookClick?: () => void
  onRequestClick?: () => void
  className?: string
}

const SpaceCard: FC<SpaceCardProps> = ({
  space,
  onBookClick,
  onRequestClick,
  className,
}) => {
  const rootClasses = [classes.spaceCard]
  if (className) rootClasses.push(className)

  const { name, img, area, workspaces, screen, ownMeeting, options, price } =
    space

  return (
    <article className={rootClasses.join(' ')}>
      <Img className={classes.img} src={img} loader />

      <div className={classes.content}>
        <h2 className={classes.title}>&#171;{name}&#187;</h2>

        <div className={classes.parameters}>
          <div className={classes.wrapper}>
            {area && (
              <span className={classes.parameter}>
                <Icon icon="area" size="3rem" color="white" />
                <h4 className={classes.header}>{area}</h4>
              </span>
            )}

            {workspaces && (
              <span className={classes.parameter}>
                <Icon icon="workspace" size="3rem" color="white" />
                <h4
                  className={classes.header}
                >{`${workspaces} рабочих мест`}</h4>
              </span>
            )}
          </div>

          {screen && (
            <span className={classes.parameter}>
              <Icon icon="projector" size="3rem" color="white" />
              <h4 className={classes.header}>Проектор / Экран / Флипчарт</h4>
            </span>
          )}

          {ownMeeting && (
            <span className={classes.parameter}>
              <Icon icon="meeting" size="3rem" color="white" />
              <h4 className={classes.header}>Собственная переговорная</h4>
            </span>
          )}
        </div>

        {options && (
          <ul className={classes.options}>
            {options.map(option => (
              <li key={option} className={classes.option}>
                {option}
              </li>
            ))}
          </ul>
        )}

        {price && (
          <div className={classes.prices}>
            <span>{`${price.monthly.toLocaleString()}₽/мес`}</span>
            <span>{`${price.quarterly.toLocaleString()}₽/квартал*`}</span>
            <span>{`${price.yearly.toLocaleString()}₽/год*`}</span>
          </div>
        )}

        <p className={classes.sales}>
          * Действует система скидок для резидентов. Более подробную информацию
          уточняйте у менеджеров или в личном кабинете
        </p>

        <div className={classes.controls}>
          <Button
            label="ЗАБРОНИРОВАТЬ ОНЛАЙН"
            onClick={onBookClick}
            color="green"
            inverted
          />

          <Button
            label="ОСТАВИТЬ ЗАЯВКУ"
            onClick={onRequestClick}
            color="green"
          />
        </div>
      </div>
    </article>
  )
}

export { SpaceCard }
export type { ISpace }
