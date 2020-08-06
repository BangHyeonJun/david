import React, { createContext, Dispatch, useReducer, useContext } from 'react';

/* 사이드 바 State */
export type SideBarState = {
    id: string;
    title: string;
    style: string;
    url: string;
    active: boolean;
};

/* 사이드 바 메뉴들이 들어갈 리스트 */
type SideBarsState = SideBarState[];

const SideBarsStateContext = createContext<SideBarsState | undefined>(
    undefined,
);

type Action =
    | { type: 'INIT'; menus: SideBarsState }
    | { type: 'ACTIVE'; pathName: string };

// | { type: 'INIT'; SideBars: SideBarsState }
// | { type: 'CREATE'; SideBar: SideBarState }
// | { type: 'ACTIVE'; id: string }
// | { type: 'CLONE'; id: string }
// | { type: 'SAVE'; id: string }
// | { type: 'EDIT_NAME'; id: string; name: string }
// | { type: 'REMOVE'; id: string }

// /* 시나리오 리스트에서 사용하는 이벤트 */
// | { type: 'SideBarLIST_SHOW_EVENT'; id: string }
// | { type: 'SideBarLIST_HIDE_EVENT'; id: string };

type SideBarsDispatch = Dispatch<Action>;
const SideBarsDispatchContext = createContext<SideBarsDispatch | undefined>(
    undefined,
);

function SideBarsReducer(state: SideBarsState, action: Action): SideBarsState {
    switch (action.type) {
        /* 사용자가 메뉴항목을 초기화 하는 리듀서 */
        case 'INIT':
            return action.menus;

        /* 사용자가 메뉴 클릭시 실행 되어지는 리듀서 */
        case 'ACTIVE':
            return state.map(item => ({
                ...item,
                active: item.url === action.pathName,
            }));
        default:
            throw new Error('Unhandled action');
    }
}

export function SideBarsContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // TODO : url 대문자 제거해줘야 함 왜 다른 페이지는 대문자를 써야하지?
    const [SideBars, dispatch] = useReducer(SideBarsReducer, [
        {
            id: 'home',
            title: 'HOME',
            style: 'home',
            url: '/',
            active: false,
        },
        // {
        //     id: 'about',
        //     title: 'ABOUT',
        //     style: 'about',
        //     url: '/About',
        //     active: false,
        // },
        // {
        //     id: 'history',
        //     title: 'HISTORY',
        //     style: 'history',
        //     url: '/History',
        //     active: false,
        // },
        // {
        //     id: 'portfolio',
        //     title: 'PORTFOLIO',
        //     style: 'portfolio',
        //     url: '/Portfolio',
        //     active: false,
        // },
        // {
        //     id: 'blog',
        //     title: 'BLOG',
        //     style: 'blog',
        //     url: '/Blog',
        //     active: false,
        // },
        {
            id: 'contact',
            title: 'CONTACT',
            style: 'contact',
            url: '/Contact',
            active: false,
        },
    ]);

    return (
        <SideBarsDispatchContext.Provider value={dispatch}>
            <SideBarsStateContext.Provider value={SideBars}>
                {children}
            </SideBarsStateContext.Provider>
        </SideBarsDispatchContext.Provider>
    );
}

export function useSideBarsState() {
    const state = useContext(SideBarsStateContext);
    if (!state) throw new Error('SideBarsStateContext not found');
    return state;
}

export function useSideBarsDispatch() {
    const dispatch = useContext(SideBarsDispatchContext);
    if (!dispatch) throw new Error('SideBarsDispatchContext not found');
    return dispatch;
}
