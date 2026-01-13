export interface HookItem {
  id: number;
  label: string;
  path: string;
}

export const HOOKS_DATA: HookItem[] = [
  { id: 1, label: "useState", path: "use-state" },
  { id: 2, label: "useEffect", path: "use-effect" },
  { id: 3, label: "useRef", path: "use-ref" },
  { id: 4, label: "useMemo", path: "use-memo" },
];
