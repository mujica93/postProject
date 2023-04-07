import { createAction, props } from "@ngrx/store";

export const searchPost = createAction(
  '[Search] Search Post',
  props<{data: string}>()
);
