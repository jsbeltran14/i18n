import React from "react";
import {FormattedDate} from 'react-intl';
import {FormattedMessage} from 'react-intl';

let lang = navigator.language

function formatNumber(number) {
  return new Intl.NumberFormat().format(number)
}

const Job = (props) => {


  return (
    
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} <FormattedMessage id="Millions"/> </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        {formatNumber(props.offer.views)}
      </td>
    </tr>
  );
};

export default Job;
