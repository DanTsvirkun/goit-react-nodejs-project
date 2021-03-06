import React from 'react';
import StatisticCustomSelectors from '../../Components/StatisticCustomSelectors/StatisticCustomSelectors';
import StatisticList from '../../Components/StatisticList/StatisticList';
import css from './Statistic.module.css';

const Statistic = () => {
  return (
    <section className={css.statistic}>
      <h2 className={css.statistic__title}>Статистика</h2>
      <div className={css.statistic__wrapper}>
        <div className={css.statistic__chart_wrapper}></div>
        <div className={css.statistic__info_wrapper}>
          <div className={css.statistic__info_select}>
            <StatisticCustomSelectors startValue={'Месяц'} />
            <StatisticCustomSelectors startValue={'Год'} />
          </div>

          <div className={css.statistic__group}>
            <div className={css.statistic__group_header}>
              <p className={css.statistic__group_title}>Категория</p>
              <p className={css.statistic__group_title}>Сумма</p>
            </div>
            <StatisticList />
            <div className={css.statistic__group_result}>
              <div className={css.statistic__group_result_expense}>
                <p className={css.statistic__group_result_expense_info}>
                  Расходы:
                </p>
                <p className={css.statistic__group_result_expense_info}>
                  22 549.24
                </p>
              </div>
              <div className={css.statistic__group_result_income}>
                <p className={css.statistic__group_result_income_info}>
                  Доходы:
                </p>
                <p className={css.statistic__group_result_income_info}>
                  27 350.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
