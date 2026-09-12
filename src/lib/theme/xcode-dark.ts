import type {ThemeRegistrationRaw} from "shiki";


export const xcodeDark: ThemeRegistrationRaw = {
    name: 'xcode-dark',
    type: 'dark',
    colors: {
        'editor.background': '#1f1f24',
        'editor.foreground': '#ffffff'
    },
    settings: [
        { scope: ['comment'], settings: { foreground: '#838991' } },
        { scope: ['string', 'punctuation.definition.string'], settings: { foreground: '#ff8a7a' } },
        { scope: ['constant.numeric'], settings: { foreground: '#d9c668' } },
        { scope: ['constant.language'], settings: { foreground: '#ff85b8' } },
        { scope: ['keyword', 'storage'], settings: { foreground: '#ff85b8' } },
        { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#6bdfff' } },
        {
            scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class'],
            settings: { foreground: '#83c9bc' }
        },
        { scope: ['entity.name.tag'], settings: { foreground: '#ff85b8' } },
        { scope: ['meta.preprocessor'], settings: { foreground: '#ffa14f' } }
    ]
};

