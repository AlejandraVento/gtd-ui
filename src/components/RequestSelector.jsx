import React from 'react';
import { createListCollection } from '@chakra-ui/react';
import Dropdown from './Dropdown';

export default function RequestSelector({ value, setValue }) {
  const typesList = createListCollection({
    items: [
      { label: 'Selecciona un tipo de trámite', value: '' },
      {
        label: 'Ingreso por contrato',
        value: 'ingreso-contrato',
      },
      { label: 'Prorroga de contrato', value: 'prorroga-contrato' },
      { label: 'Ingreso por concurso', value: 'ingreso-concurso' },
      {
        label: 'Ascenso en escalafón universitario',
        value: 'ascenso-escalafon',
      },
      {
        label: 'Cambio denominación cargo docente',
        value: 'cambio-cargo-docente',
      },
      {
        label: 'Cambio denominación cargo jefe de departamento',
        value: 'cambio-cargo-jefe-departamento',
      },
      {
        label: 'Cambio denominación cargo jefe de centro',
        value: 'cambio-cargo-jefe-centro',
      },
      {
        label: 'Cambio denominación cargo jefe de postgrado',
        value: 'cambio-cargo-jefe-postgrado',
      },
      {
        label: 'Permisos remunerados',
        value: 'permisos-remunerados',
      },
      {
        label: 'Permisos no remunerados',
        value: 'permisos-no-remunerados',
      },
      {
        label: 'Reincorporación de permisos',
        value: 'reincorporacion-permisos',
      },
      {
        label: 'Egresos',
        value: 'egresos',
      },
      {
        label: 'Solicitud de dictamen de jubilación',
        value: 'solicitud-dictamen-jubilacion',
      },
      {
        label: 'Solicitud de jubilación',
        value: 'solicitud-jubilacion',
      },
    ],
  });

  const typesLabels = {
    'ingreso-contrato': 'Ingreso por contrato',
    'prorroga-contrato': 'Prorroga de contrato',
    'ingreso-concurso': 'Ingreso por concurso',
    'ascenso-escalafon': 'Ascenso en escalafón universitario',
    'cambio-cargo-docente': 'Cambio denominación cargo docente',
    'cambio-cargo-jefe-departamento':
      'Cambio denominación cargo jefe de departamento',
    'cambio-cargo-jefe-centro': 'Cambio denominación cargo jefe de centro',
    'cambio-cargo-jefe-postgrado':
      'Cambio denominación cargo jefe de postgrado',
    'permisos-remunerados': 'Permisos remunerados',
    'permisos-no-remunerados': 'Permisos no remunerados',
    'reincorporacion-permisos': 'Reincorporación de permisos',
    egresos: 'Egresos',
    'solicitud-dictamen-jubilacion': 'Solicitud de dictamen de jubilación',
    'solicitud-jubilacion': 'Solicitud de jubilación',
  };

  return (
    <Dropdown
      value={value}
      setValue={setValue}
      listOfItems={typesList}
      placeholder="Selecciona un tipo de trámite"
      icon="fa-solid fa-filter"
      labels={typesLabels}
      dropdownLabel="Tipo de trámite"
    />
  );
}
