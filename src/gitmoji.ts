// Links: https://github.com/carloscuesta/gitmoji/blob/master/packages/gitmojis/src/gitmojis.json
import * as vscode from 'vscode';

interface gitmojiList {
    readonly emoji: any;
    readonly code: any;
    readonly description: any;
    readonly searchText?: any;
}

let Gitmoji: Array<gitmojiList> = [
    {
        emoji: '🎨',
        code: ':art:',
        description: vscode.l10n.t('Improve structure/format of the code'),
        searchText: "palette pretty refactor restructure art",
    },
    {
        emoji: '⚡️',
        code: ':zap:',
        description: vscode.l10n.t('Improve performance'),
        searchText: "speed optimize zap flash",
    },
    {
        emoji: '🔥',
        code: ':fire:',
        description: vscode.l10n.t('Remove code or files'),
        searchText: "delete fire clean",
    },
    {
        emoji: '🐛',
        code: ':bug:',
        description: vscode.l10n.t('Fix a bug'),
        searchText: "worm",
    },
    {
        emoji: '🚑',
        code: ':ambulance:',
        description: vscode.l10n.t('Critical hotfix'),
        searchText: "bug ambulance",
    },
    {
        emoji: '✨',
        code: ':sparkles:',
        description: vscode.l10n.t('Introduce new features'),
        searchText: "add implement",
    },
    {
        emoji: '📝',
        code: ':memo:',
        description: vscode.l10n.t('Add or update documentation'),
        searchText: "note doc",
    },
    {
        emoji: '🚀',
        code: ':rocket:',
        description: vscode.l10n.t('Deploy stuff'),
        searchText: "rocket",
    },
    {
        emoji: '💄',
        code: ':lipstick:',
        description: vscode.l10n.t('Add or update the UI and style files'),
        searchText: "lipstick",
    },
    {
        emoji: '🎉',
        code: ':tada:',
        description: vscode.l10n.t('Begin a project'),
        searchText: "start init",
    },
    {
        emoji: '✅',
        code: ':white_check_mark:',
        description: vscode.l10n.t('Add, update, or pass tests'),
        searchText: "check mark fix",
    },
    {
        emoji: '🔒️',
        code: ':lock:',
        description: vscode.l10n.t('Fix security issues'),
        searchText: "lock secret",
    },
    {
        emoji: '🔐',
        code: ':closed_lock_with_key:',
        description: vscode.l10n.t('Add or update secrets'),
        searchText: "lock secret",
    },
    {
        emoji: '🔖',
        code: ':bookmark:',
        description: vscode.l10n.t('Release/Version tags'),
        searchText: "bookmark version",
    },
    {
        emoji: '🚨',
        code: ':rotating_light:',
        description: vscode.l10n.t('Fix compiler/linter warnings'),
        searchText: "alert light",
    },
    {
        emoji: '🚧',
        code: ':construction:',
        description: vscode.l10n.t('Work in progress'),
        searchText: "wip",
    },
    {
        emoji: '💚',
        code: ':green_heart:',
        description: vscode.l10n.t('Fix CI Build'),
        searchText: "green heart",
    },
    {
        emoji: '⬇️',
        code: ':arrow_down:',
        description: vscode.l10n.t('Downgrade dependencies'),
        searchText: "import require",
    },
    {
        emoji: '⬆️',
        code: ':arrow_up:',
        description: vscode.l10n.t('Upgrade dependencies'),
        searchText: "import require",
    },
    {
        emoji: '📌',
        code: ':pushpin:',
        description: vscode.l10n.t('Pin dependencies to specific versions'),
    },
    {
        emoji: '👷',
        code: ':construction_worker:',
        description: vscode.l10n.t('Add or update CI build system'),
    },
    {
        emoji: '📈',
        code: ':chart_with_upwards_trend:',
        description: vscode.l10n.t('Add or update analytics or track code'),
    },
    {
        emoji: '♻️',
        code: ':recycle:',
        description: vscode.l10n.t('Refactor code'),
        searchText: "structure rename clean read",
    },
    {
        emoji: '➕',
        code: ':heavy_plus_sign:',
        description: vscode.l10n.t('Add a dependency'),
        searchText: "import require",
    },
    {
        emoji: '➖',
        code: ':heavy_minus_sign:',
        description: vscode.l10n.t('Remove a dependency'),
        searchText: "import require",
    },
    {
        emoji: '🔧',
        code: ':wrench:',
        description: vscode.l10n.t('Add or update configuration files'),
        searchText: "settings",
    },
    {
        emoji: '🔨',
        code: ':hammer:',
        description: vscode.l10n.t('Add or update development scripts'),
    },
    {
        emoji: '🌐',
        code: ':globe_with_meridians:',
        description: vscode.l10n.t('Internationalization and localization'),
        searchText: "lang locale",
    },
    {
        emoji: '✏️',
        code: ':pencil2:',
        description: vscode.l10n.t('Fix typos'),
    },
    {
        emoji: '💩',
        code: ':poop:',
        description: vscode.l10n.t('Write bad code that needs to be improved'),
        searchText: "shit poo",
    },
    {
        emoji: '⏪',
        code: ':rewind:',
        description: vscode.l10n.t('Revert changes'),
    },
    {
        emoji: '🔀',
        code: ':twisted_rightwards_arrows:',
        description: vscode.l10n.t('Merge branches'),
    },
    {
        emoji: '📦',
        code: ':package:',
        description: vscode.l10n.t('Add or update compiled files or packages'),
    },
    {
        emoji: '👽️',
        code: ':alien:',
        description: vscode.l10n.t('Update code due to external API changes'),
        searchText: "alien",
    },
    {
        emoji: '🚚',
        code: ':truck:',
        description: vscode.l10n.t('Move or rename resources (e.g.: files, paths, routes)'),
    },
    {
        emoji: '📄',
        code: ':page_facing_up:',
        description: vscode.l10n.t('Add or update license'),
    },
    {
        emoji: '💥',
        code: ':boom:',
        description: vscode.l10n.t('Introduce breaking changes'),
        searchText: "incompatible",
    },
    {
        emoji: '🍱',
        code: ':bento:',
        description: vscode.l10n.t('Add or update assets'),
    },
    {
        emoji: '♿️',
        code: ':wheelchair:',
        description: vscode.l10n.t('Improve accessibility'),
    },
    {
        emoji: '💡',
        code: ':bulb:',
        description: vscode.l10n.t('Add or update comments in source code'),
        searchText: "bulb light describe",
    },
    {
        emoji: '🍻',
        code: ':beers:',
        description: vscode.l10n.t('Write code drunkenly'),
    },
    {
        emoji: '💬',
        code: ':speech_balloon:',
        description: vscode.l10n.t('Add or update text and literals'),
        searchText: "const token",
    },
    {
        emoji: '🗃️',
        code: ':card_file_box:',
        description: vscode.l10n.t('Perform database related changes'),
    },
    {
        emoji: '🔊',
        code: ':loud_sound:',
        description: vscode.l10n.t('Add or update logs'),
        searchText: "print output",
    },
    {
        emoji: '🔇',
        code: ':mute:',
        description: vscode.l10n.t('Remove logs'),
        searchText: "print output",
    },
    {
        emoji: '👥',
        code: ':busts_in_silhouette:',
        description: vscode.l10n.t('Add or update contributor(s)'),
        searchText: "author",
    },
    {
        emoji: '🚸',
        code: ':children_crossing:',
        description: vscode.l10n.t('Improve user experience/usability'),
    },
    {
        emoji: '🏗️',
        code: ':building_construction:',
        description: vscode.l10n.t('Make architectural changes'),
    },
    {
        emoji: '📱',
        code: ':iphone:',
        description: vscode.l10n.t('Work on responsive design'),
    },
    {
        emoji: '🤡',
        code: ':clown_face:',
        description: vscode.l10n.t('Mock things'),
    },
    {
        emoji: '🥚',
        code: ':egg:',
        description: vscode.l10n.t('Add or update an easter egg'),
    },
    {
        emoji: '🙈',
        code: ':see_no_evil:',
        description: vscode.l10n.t('Add or update a .gitignore file'),
        searchText: "exclude include",
    },
    {
        emoji: '📸',
        code: ':camera_flash:',
        description: vscode.l10n.t('Add or update snapshots'),
    },
    {
        emoji: '⚗️',
        code: ':alembic:',
        description: vscode.l10n.t('Perform experiments'),
        searchText: "sandbox",
    },
    {
        emoji: '🔍',
        code: ':mag:',
        description: vscode.l10n.t('Improve SEO'),
    },
    {
        emoji: '🏷️',
        code: ':label:',
        description: vscode.l10n.t('Add or update types'),
    },
    {
        emoji: '🌱',
        code: ':seedling:',
        description: vscode.l10n.t('Add or update seed files'),
    },
    {
        emoji: '🚩',
        code: ':triangular_flag_on_post:',
        description: vscode.l10n.t('Add, update, or remove feature flags'),
    },
    {
        emoji: '🥅',
        code: ':goal_net:',
        description: vscode.l10n.t('Catch errors'),
        searchText: "fix handle",
    },
    {
        emoji: '💫',
        code: ':dizzy:',
        description: vscode.l10n.t('Add or update animations and transitions'),
    },
    {
        emoji: '🗑️',
        code: ':wastebasket:',
        description: vscode.l10n.t('Deprecate code that needs to be cleaned up'),
    },
    {
        emoji: '🛂',
        code: ':passport_control:',
        description: vscode.l10n.t('Work on code related to authorization, roles and permissions'),
        searchText: "access",
    },
    {
        emoji: '🩹',
        code: ':adhesive_bandage:',
        description: vscode.l10n.t('Simple fix for a non-critical issue'),
        searchText: "bug workaround",
    },
    {
        emoji: '🧐',
        code: ':monocle_face:',
        description: vscode.l10n.t('Data exploration/inspection'),
    },
    {
        emoji: '⚰️',
        code: ':coffin:',
        description: vscode.l10n.t('Remove dead code'),
        searchText: "unreachable unused old",
    },
    {
        emoji: '🧪',
        code: ':test_tube:',
        description: vscode.l10n.t('Add a failing test'),
    },
    {
        emoji: '👔',
        code: ':necktie:',
        description: vscode.l10n.t('Add or update business logic'),
    },
    {
        emoji: '🩺',
        code: ':stethoscope:',
        description: vscode.l10n.t('Add or update healthcheck'),
    },
    {
        emoji: '🧱',
        code: ':bricks:',
        description: vscode.l10n.t('Infrastructure related changes'),
    },
    {
        emoji: '🧑‍💻',
        code: ':technologist:',
        description: vscode.l10n.t('Improve developer experience'),
        searchText: "docs sandbox help examples",
    },
    {
        emoji: '💸',
        code: ':money_with_wings:',
        description: vscode.l10n.t('Add sponsorships or money related infrastructure'),
    },
    {
        emoji: '🧵',
        code: ':thread:',
        description: vscode.l10n.t('Add or update code related to multithreading or concurrency'),
    },
    {
        emoji: '🦺',
        code: ':safety_vest:',
        description: vscode.l10n.t('Add or update code related to validation'),
    },
];

export default Gitmoji;
