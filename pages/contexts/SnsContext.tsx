import React, { createContext, Dispatch, useReducer, useContext } from 'react';

/* 사이드 바 State */
export type Snstate = {
    id: string;
    title: string;
    style: string;
    href: string;
};

/* 사이드 바 메뉴들이 들어갈 리스트 */
type SnsState = Snstate[];

const SnsStateContext = createContext<SnsState | undefined>(undefined);

type Action = { type: 'INIT'; snsArr: SnsState };

// | { type: 'INIT'; Sns: SnsState }
// | { type: 'CREATE'; SideBar: Snstate }
// | { type: 'ACTIVE'; id: string }
// | { type: 'CLONE'; id: string }
// | { type: 'SAVE'; id: string }
// | { type: 'EDIT_NAME'; id: string; name: string }
// | { type: 'REMOVE'; id: string }

// /* 시나리오 리스트에서 사용하는 이벤트 */
// | { type: 'SideBarLIST_SHOW_EVENT'; id: string }
// | { type: 'SideBarLIST_HIDE_EVENT'; id: string };

type SnsDispatch = Dispatch<Action>;
const SnsDispatchContext = createContext<SnsDispatch | undefined>(undefined);

function SnsReducer(state: SnsState, action: Action): SnsState {
    switch (action.type) {
        /* 사용자가 SNS 항목을 초기화 하는 리듀서 */
        case 'INIT':
            return action.snsArr;

        default:
            throw new Error('Unhandled action');
    }
}

export function SnsContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [Sns, dispatch] = useReducer(SnsReducer, [
        {
            id: 'kakao',
            title: 'KAKAO TALK',
            style: 'kakao',
            href: 'https://open.kakao.com/o/sJfDYFfc',
        },
        {
            id: 'insta',
            title: 'INSTAGRAM',
            style: 'insta',
            href: 'https://www.instagram.com/jjunijjunijjuni',
        },
        {
            id: 'linkedin',
            title: 'LINKED IN',
            style: 'linkedin',
            href:
                'https://www.linkedin.com/in/%ED%98%84%EC%A4%80-%EB%B0%A9-38b9031ab/',
        },
        {
            id: 'rss',
            title: 'RSS',
            style: 'rss',
            href: '',
        },
    ]);

    return (
        <SnsDispatchContext.Provider value={dispatch}>
            <SnsStateContext.Provider value={Sns}>
                {children}
            </SnsStateContext.Provider>
        </SnsDispatchContext.Provider>
    );
}

export function useSnsState() {
    const state = useContext(SnsStateContext);
    if (!state) throw new Error('SnsStateContext not found');
    return state;
}

export function useSnsDispatch() {
    const dispatch = useContext(SnsDispatchContext);
    if (!dispatch) throw new Error('SnsDispatchContext not found');
    return dispatch;
}
