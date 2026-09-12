/**
 * Small, dependency-free UI localization helper.
 *
 * The extension UI follows Chrome's language. Chinese (Simplified) is used for
 * zh-* locales; all other locales fall back to English.
 */

const MESSAGES = {
  en: {
    extensionTitle: 'Video Speed Controller',
    optionsTitle: 'Video Speed Controller: Options',
    toggleExtension: 'Toggle extension',
    disableExtension: 'Disable extension',
    enableExtension: 'Enable extension',
    settings: 'Settings',
    advanced: 'Advanced',
    faq: 'FAQ',
    save: 'Save',
    moreActions: 'More actions',
    import: 'Import',
    export: 'Export',
    reset: 'Reset',
    decrease: 'Decrease speed',
    increase: 'Increase speed',
    resetPreferred: 'Reset to preferred speed',
    shortcuts: 'Shortcuts',
    addNew: 'Add New',
    preferences: 'Preferences',
    audioSupport: 'Audio support',
    audioSupportHelp: 'Show speed controls on audio elements.',
    rememberSpeed: 'Remember playback speed',
    rememberSpeedHelp: 'Store and auto-apply the last used speed to all new videos.',
    hideController: 'Hide controller by default',
    hideControllerHelp: 'Controller stays hidden until toggled via shortcut.',
    exclusiveShortcuts: 'Exclusive keyboard shortcuts',
    exclusiveShortcutsHelp:
      'When possible, prevent websites from also handling VSC shortcut keys.',
    controllerOpacity: 'Controller opacity',
    controllerOpacityHelp: '0 = fully transparent, 1 = fully opaque. Default: 0.6',
    controllerButtonSize: 'Controller button size',
    controllerButtonSizeHelp:
      'Font size in pixels for the speed display and buttons. Default: 14',
    consoleLogLevel: 'Console log level',
    consoleLogLevelHelp: 'Set verbosity in the browser console',
    none: 'None',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
    debug: 'Debug',
    verbose: 'Verbose',
    siteRules: 'Site rules',
    siteRulesHelp:
      'Per-site overrides. Use a domain or <a href="https://www.regexpal.com/">regex</a> (e.g. <code>/.edu$/i</code>). Check "Disable" to turn off the extension on that site. Set a speed to override the default.',
    pattern: 'Pattern',
    disable: 'Disable',
    speed: 'Speed',
    addSiteRule: 'Add Site Rule',
    customCss: 'Custom CSS',
    customCssHelp:
      'Additional rules injected alongside the built-in defaults. Use to override positioning or add site-specific tweaks.',
    cssPlaceholder:
      "/* Global override */\nvsc-controller { top: 50px !important; }\n\n/* Domain-specific */\n:root[style*='--vsc-domain: &quot;example.com&quot;'] vsc-controller {\n  display: none !important;\n}",
    localFilesToc: 'Local files / Incognito',
    disableSiteToc: 'Disable on a site',
    siteSpeedToc: 'Default speed per site',
    rememberSpeedToc: 'Remember speed',
    shortcutConflictsToc: 'Shortcut conflicts',
    positioningToc: 'Controller positioning',
    missingToc: 'Controller not showing',
    spaToc: 'Speed resets on navigate',
    audioToc: 'Audio support',
    faqLocalTitle: 'The speed controls are not showing up for local videos or Incognito mode?',
    faqLocalIntro:
      'To enable playback of local media (e.g. File &gt; Open File) or Incognito mode, you need to manually grant additional permissions to the extension.',
    faqLocalStep1: 'In a new tab, navigate to <code>chrome://extensions</code>',
    faqLocalStep2:
      'Find "Video Speed Controller" extension in the list and enable "Allow access to file URLs" and/or "Allow in Incognito".',
    faqDisableTitle: 'How do I disable the extension on a specific site?',
    faqDisableIntro:
      'Go to <strong>Advanced &gt; Site rules</strong> and add a rule with the site\'s domain (e.g. <code>example.com</code>). Check the <strong>Disable</strong> checkbox. The extension will not inject on that site. You can also use regex patterns like <code>/.edu$/i</code> to match multiple domains.',
    faqSiteSpeedTitle: 'How do I set a default speed for a specific site?',
    faqSiteSpeedIntro:
      'In <strong>Advanced &gt; Site rules</strong>, add a rule with the site\'s domain and set the <strong>Speed</strong> field to your desired value (e.g. <code>2</code> for 2x). Leave the Disable checkbox unchecked. Every new video on that site will start at that speed.',
    faqRememberTitle: 'How does "Remember playback speed" interact with site rules?',
    faqRememberP1:
      'When <code>rememberSpeed</code> is <strong>off</strong> (default), each page load starts at 1x &mdash; or the site rule speed if one matches. Your in-session speed changes apply to all new videos but are forgotten on page reload.',
    faqRememberP2:
      'When <code>rememberSpeed</code> is <strong>on</strong>, the last speed you set is stored and persists across sessions. This stored speed <strong>takes precedence</strong> over site rule defaults. To let a site rule win again, either turn off <code>rememberSpeed</code> or manually reset to 1x.',
    faqKeysTitle: "A site's keyboard shortcuts conflict with mine. What can I do?",
    faqKeysIntro: 'Three options:',
    faqKeysP1:
      '<strong>Add a modifier:</strong> In Settings &gt; Shortcuts, add <code>Shift</code>, <code>Ctrl</code>, or <code>Alt</code> to your shortcut keys to create chord combinations the site won\'t intercept.',
    faqKeysP2:
      '<strong>Rebind to unused keys:</strong> Change the default key to one the site doesn\'t use.',
    faqKeysP3:
      '<strong>Enable exclusive mode:</strong> Turn on <code>Exclusive keyboard shortcuts</code> in Preferences to prevent sites from also handling your VSC shortcut keys.',
    faqPositionTitle: 'The controller overlaps with site controls. How do I reposition it?',
    faqPositionP1:
      'Go to <strong>Advanced &gt; Controller CSS</strong>. Add a domain rule targeting <code>vsc-controller</code> using the <code>--vsc-domain</code> CSS variable. Example:',
    faqPositionP2:
      ':root[style*=\'--vsc-domain: "example.com"\'] vsc-controller { position: relative; top: 60px; }',
    faqPositionP3:
      'You can also drag the controller to a new position on any page. See the existing rules for YouTube, Netflix, etc. as reference.',
    faqMissingTitle: 'The controller is not appearing on a site. Why?',
    faqMissingIntro: 'Common causes:',
    faqMissingP1:
      'The site is in your <strong>Site rules</strong> with Disable checked &mdash; remove or uncheck it.',
    faqMissingP2:
      'The site uses Flash or a non-HTML5 player &mdash; the extension only works with native <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> elements.',
    faqMissingP3:
      '<code>Hide controller by default</code> is enabled &mdash; press your display toggle shortcut (default: <code>V</code>) to show it.',
    faqSpaTitle: 'Speed resets when I navigate on YouTube or similar single-page apps?',
    faqSpaIntro:
      "YouTube uses SPA navigation &mdash; the page doesn't fully reload, but the player may reinitialize. The extension restores speed from the in-session value automatically. If speed still resets, enable <code>rememberSpeed</code> in Preferences to persist speed across navigations and sessions.",
    faqAudioTitle: 'Does this work with audio elements, not just video?',
    faqAudioIntro:
      'Yes. When <code>Audio support</code> is enabled in Preferences (on by default), the controller appears on <code>&lt;audio&gt;</code> elements too. All speed controls and keyboard shortcuts work identically for audio.',
    about: 'About Video Speed Controller',
    feedback: 'Send Feedback',
    actionSlower: 'Decrease speed',
    actionFaster: 'Increase speed',
    actionRewind: 'Rewind',
    actionAdvance: 'Advance',
    actionReset: 'Reset speed',
    actionFast: 'Preferred speed',
    actionMuted: 'Mute',
    actionSofter: 'Decrease volume',
    actionLouder: 'Increase volume',
    actionPause: 'Pause',
    actionMark: 'Set marker',
    actionJump: 'Jump to marker',
    actionDisplay: 'Show/hide controller',
    pressKey: 'press a key',
    valuePlaceholder: 'value (0.10)',
    sitePatternPlaceholder: 'youtube.com or /regex/',
    globalSpeedPlaceholder: '(global)',
    keyNull: 'null',
    ctrl: 'Ctrl',
    alt: 'Alt',
    shift: 'Shift',
    meta: 'Meta',
    altGrWarning: 'This combination may conflict with AltGr input on some keyboard layouts.',
    metaWarning: 'Some Cmd/Meta combinations are intercepted by the OS and may not work.',
    noCssRules: 'No CSS rules parsed — check for syntax errors.',
    ruleParsed: '{{count}} rule{{plural}} parsed, {{dropped}} dropped: {{rules}}',
    syntaxError: 'Syntax error: {{message}}',
    invalidRegex: 'Error: Invalid site rule regex: "{{pattern}}". Unable to save.',
    speedRange: 'Error: Speed for "{{pattern}}" must be between {{min}} and {{max}}.',
    cssSyntaxError: 'Error: Controller CSS has syntax errors. Fix them before saving.',
    cssTooLarge:
      'Error: Controller CSS exceeds 8KB storage limit ({{size}}KB). Reduce CSS size.',
    saveFailed: 'Error: failed to save options to storage',
    savingFailed: 'Error saving options: {{message}}',
    loadingFailed: 'Error loading options: {{message}}',
    restoringDefaults: 'Restoring defaults...',
    defaultsRestored: 'Default options restored',
    restoreFailed: 'Error restoring defaults: {{message}}',
    settingsExported: 'Settings exported',
    exportFailed: 'Error exporting settings: {{message}}',
    invalidJson: 'File is not valid JSON',
    invalidSettingsFile: 'File does not look like a Video Speed Controller settings file',
    importWriteFailed: 'Failed to write imported settings to storage',
    settingsImported: 'Settings imported successfully',
    importFailed: 'Import failed: {{message}}',
    enabledReload: 'Enabled. Reload page.',
    disabledReload: 'Disabled. Reload page.',
  },
  zh: {
    extensionTitle: '视频倍速控制器',
    optionsTitle: '视频倍速控制器：选项',
    toggleExtension: '切换扩展启用状态',
    disableExtension: '停用扩展',
    enableExtension: '启用扩展',
    settings: '设置',
    advanced: '高级',
    faq: '常见问题',
    save: '保存',
    moreActions: '更多操作',
    import: '导入',
    export: '导出',
    reset: '重置',
    decrease: '降低速度',
    increase: '提高速度',
    resetPreferred: '恢复首选速度',
    shortcuts: '快捷键',
    addNew: '新增',
    preferences: '偏好设置',
    audioSupport: '音频支持',
    audioSupportHelp: '在音频元素上显示倍速控制器。',
    rememberSpeed: '记住播放速度',
    rememberSpeedHelp: '保存并自动将上次使用的速度应用到新视频。',
    hideController: '默认隐藏控制器',
    hideControllerHelp: '控制器保持隐藏，直到通过快捷键显示。',
    exclusiveShortcuts: '独占快捷键',
    exclusiveShortcutsHelp: '在可能的情况下，阻止网站同时处理 VSC 快捷键。',
    controllerOpacity: '控制器透明度',
    controllerOpacityHelp: '0 = 完全透明，1 = 完全不透明。默认值：0.6',
    controllerButtonSize: '控制器按钮大小',
    controllerButtonSizeHelp: '倍速显示和按钮的字体大小（像素）。默认值：14',
    consoleLogLevel: '控制台日志级别',
    consoleLogLevelHelp: '设置浏览器控制台中的日志详细程度',
    none: '无',
    error: '错误',
    warning: '警告',
    info: '信息',
    debug: '调试',
    verbose: '详细',
    siteRules: '网站规则',
    siteRulesHelp:
      '按网站覆盖设置。可填写域名或 <a href="https://www.regexpal.com/">正则表达式</a>（例如 <code>/.edu$/i</code>）。勾选“禁用”可关闭该网站上的扩展，也可以设置覆盖默认值的播放速度。',
    pattern: '匹配规则',
    disable: '禁用',
    speed: '速度',
    addSiteRule: '新增网站规则',
    customCss: '自定义 CSS',
    customCssHelp: '与内置默认规则一起注入的附加规则，可用于调整位置或添加网站专属设置。',
    cssPlaceholder:
      "/* 全局覆盖 */\nvsc-controller { top: 50px !important; }\n\n/* 针对特定域名 */\n:root[style*='--vsc-domain: &quot;example.com&quot;'] vsc-controller {\n  display: none !important;\n}",
    localFilesToc: '本地文件 / 无痕模式',
    disableSiteToc: '禁用某个网站',
    siteSpeedToc: '按网站设置默认速度',
    rememberSpeedToc: '记住速度',
    shortcutConflictsToc: '快捷键冲突',
    positioningToc: '控制器位置',
    missingToc: '控制器不显示',
    spaToc: '页面跳转后速度重置',
    audioToc: '音频支持',
    faqLocalTitle: '本地视频或无痕模式下没有显示倍速控制，怎么办？',
    faqLocalIntro:
      '要播放本地媒体（例如“文件 > 打开文件”）或在无痕模式下使用，需要手动授予扩展额外权限。',
    faqLocalStep1: '打开新标签页，访问 <code>chrome://extensions</code>',
    faqLocalStep2: '在列表中找到“Video Speed Controller”，开启“允许访问文件网址”和/或“允许在无痕模式下使用”。',
    faqDisableTitle: '如何在某个网站上禁用扩展？',
    faqDisableIntro:
      '前往<strong>高级 > 网站规则</strong>，添加该网站的域名（例如 <code>example.com</code>），然后勾选<strong>禁用</strong>。扩展不会在该网站注入。也可以使用 <code>/.edu$/i</code> 这样的正则表达式匹配多个域名。',
    faqSiteSpeedTitle: '如何为某个网站设置默认速度？',
    faqSiteSpeedIntro:
      '在<strong>高级 > 网站规则</strong>中添加域名，并在<strong>速度</strong>字段填写目标值（例如 <code>2</code> 表示 2 倍速）。不要勾选“禁用”，该网站上的新视频就会以此速度开始播放。',
    faqRememberTitle: '“记住播放速度”和网站规则如何共同生效？',
    faqRememberP1:
      '当 <code>rememberSpeed</code> <strong>关闭</strong>（默认）时，每次加载页面从 1 倍速开始；如果匹配到网站规则，则使用规则速度。本次页面中的速度调整会应用到新视频，但刷新页面后不会保留。',
    faqRememberP2:
      '当 <code>rememberSpeed</code> <strong>开启</strong>时，上次设置的速度会被保存并跨会话保留。保存的速度<strong>优先于</strong>网站规则默认值。若想再次使用网站规则，请关闭 <code>rememberSpeed</code> 或手动重置为 1 倍速。',
    faqKeysTitle: '网站快捷键和我的快捷键冲突，怎么办？',
    faqKeysIntro: '有三种办法：',
    faqKeysP1: '<strong>添加修饰键：</strong>在“设置 > 快捷键”中加入 <code>Shift</code>、<code>Ctrl</code> 或 <code>Alt</code>，组成网站不易拦截的组合键。',
    faqKeysP2: '<strong>改用未占用的按键：</strong>将默认按键改成网站没有使用的按键。',
    faqKeysP3: '<strong>启用独占模式：</strong>在偏好设置中开启<code>独占快捷键</code>，阻止网站同时处理 VSC 快捷键。',
    faqPositionTitle: '控制器和网站控件重叠，如何调整位置？',
    faqPositionP1: '前往<strong>高级 > 控制器 CSS</strong>，使用 <code>--vsc-domain</code> CSS 变量添加针对 <code>vsc-controller</code> 的域名规则。例如：',
    faqPositionP2: ':root[style*=\'--vsc-domain: "example.com"\'] vsc-controller { position: relative; top: 60px; }',
    faqPositionP3: '也可以直接在页面上拖动控制器。YouTube、Netflix 等网站的现有规则可作为参考。',
    faqMissingTitle: '控制器没有出现在某个网站上，为什么？',
    faqMissingIntro: '常见原因：',
    faqMissingP1: '该网站在<strong>网站规则</strong>中勾选了“禁用”，请删除规则或取消勾选。',
    faqMissingP2: '该网站使用 Flash 或非 HTML5 播放器；扩展只支持原生 <code>&lt;video&gt;</code> 和 <code>&lt;audio&gt;</code> 元素。',
    faqMissingP3: '已开启<code>默认隐藏控制器</code>，请按显示切换快捷键（默认：<code>V</code>）将其显示。',
    faqSpaTitle: '在 YouTube 或类似单页应用中跳转后速度重置，怎么办？',
    faqSpaIntro: 'YouTube 使用 SPA 导航，页面不会完全重新加载，但播放器可能会重新初始化。扩展会自动从本次会话的速度恢复。如果仍然重置，请在偏好设置中开启 <code>rememberSpeed</code>，以便跨导航和会话保存速度。',
    faqAudioTitle: '除了视频，音频元素也支持吗？',
    faqAudioIntro: '支持。在偏好设置中开启<code>音频支持</code>（默认开启）后，控制器也会显示在 <code>&lt;audio&gt;</code> 元素上。音频的所有倍速控制和快捷键与视频相同。',
    about: '关于视频倍速控制器',
    feedback: '发送反馈',
    actionSlower: '降低速度',
    actionFaster: '提高速度',
    actionRewind: '后退',
    actionAdvance: '前进',
    actionReset: '重置速度',
    actionFast: '首选速度',
    actionMuted: '静音',
    actionSofter: '降低音量',
    actionLouder: '提高音量',
    actionPause: '暂停',
    actionMark: '设置标记',
    actionJump: '跳转到标记',
    actionDisplay: '显示/隐藏控制器',
    pressKey: '按下一个按键',
    valuePlaceholder: '数值（0.10）',
    sitePatternPlaceholder: 'youtube.com 或 /正则表达式/',
    globalSpeedPlaceholder: '（全局）',
    keyNull: '无',
    ctrl: 'Ctrl',
    alt: 'Alt',
    shift: 'Shift',
    meta: 'Meta',
    altGrWarning: '此组合键可能与部分键盘布局的 AltGr 输入冲突。',
    metaWarning: '部分 Cmd/Meta 组合键会被操作系统拦截，可能无法使用。',
    noCssRules: '没有解析出 CSS 规则，请检查语法。',
    ruleParsed: '已解析 {{count}} 条规则，有 {{dropped}} 条被丢弃：{{rules}}',
    syntaxError: '语法错误：{{message}}',
    invalidRegex: '错误：网站规则正则表达式“{{pattern}}”无效，无法保存。',
    speedRange: '错误：“{{pattern}}”的速度必须介于 {{min}} 和 {{max}} 之间。',
    cssSyntaxError: '错误：控制器 CSS 存在语法错误，请修正后再保存。',
    cssTooLarge: '错误：控制器 CSS 超过 8KB 存储限制（{{size}}KB），请减少 CSS 内容。',
    saveFailed: '错误：无法将选项保存到存储空间',
    savingFailed: '保存选项时出错：{{message}}',
    loadingFailed: '加载选项时出错：{{message}}',
    restoringDefaults: '正在恢复默认设置……',
    defaultsRestored: '已恢复默认设置',
    restoreFailed: '恢复默认设置时出错：{{message}}',
    settingsExported: '设置已导出',
    exportFailed: '导出设置时出错：{{message}}',
    invalidJson: '文件不是有效的 JSON',
    invalidSettingsFile: '文件不是有效的视频倍速控制器设置文件',
    importWriteFailed: '无法将导入的设置写入存储空间',
    settingsImported: '设置导入成功',
    importFailed: '导入失败：{{message}}',
    enabledReload: '已启用，请刷新页面。',
    disabledReload: '已停用，请刷新页面。',
  },
};

export const locale = /^zh(?:-|$)/i.test(globalThis.navigator?.language || '') ? 'zh' : 'en';

export function t(key, variables = {}) {
  const template = MESSAGES[locale][key] ?? MESSAGES.en[key] ?? key;
  return Object.entries(variables).reduce(
    (message, [name, value]) => message.replaceAll(`{{${name}}}`, String(value)),
    template
  );
}

export function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  root.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  root.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  root.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
  });
}
