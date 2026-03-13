export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'no-claude-references': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'no-claude-references': ({ raw }) => {
          const pattern = /claude|anthropic|co-authored-by.*claude/i;
          const pass = !pattern.test(raw);
          return [
            pass,
            'Commit message must not contain references to Claude or Anthropic',
          ];
        },
      },
    },
  ],
};
