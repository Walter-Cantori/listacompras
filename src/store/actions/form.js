export const Types = {
  START_UPDATE: 'form/START_UPDATE',
  FINISH_UPDATE: 'form/FINISH_UPDATE',
  START_ADD: 'form/START_ADD',
  FINISH_ADD: 'form/FINISH_ADD',
}

export const Creators = {
  startUpdate: (list, product) => ({
    type: Types.START_UPDATE,
    product,
    list,
  }),

  finishUpdate: () => ({
    type: Types.FINISH_UPDATE,
  }),

  startAdd: list  => ({
    type: Types.START_ADD,
    list,
  }),

  finishAdd: () => ({
    type: Types.FINISH_ADD,
  }),

}