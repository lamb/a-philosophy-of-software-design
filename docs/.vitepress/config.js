export default {
    appearance: true,
    base: '/a-philosophy-of-software-design/',
    lang: 'zh-CN',
    title: '软件设计哲学',
    lastUpdated: true,
    themeConfig: {
        sidebar: [{
            items: [
                { text: '0 前言', link: '/preface' },
                { text: '1 Introduction', link: '/introduction' },
                { text: '2 The Nature of Complexity', link: '/the-nature-of-complexity' },
                { text: '3 Working Code Isn’t Enough', link: '/working-code-is-not-enough' },
                { text: '4 Modules Should Be Deep', link: '/modules-should-be-deep' },
                { text: '5 Information Hiding (and Leakage)', link: '/information-hiding-and-leakage' },
                { text: '6 General-Purpose Modules are Deeper', link: '/general-purpose-modules-are-deeper' },
                { text: '7 Different Layer, Different Abstraction', link: '/different-layer-different-abstraction' },
                { text: '8 Pull Complexity Downwards', link: '/pull-complexity-downwards' },
                { text: '9 Better Together Or Better Apart?', link: '/better-together-or-better-apart' },
                { text: '10 Define Errors Out Of Existence', link: '/define-errors-out-of-existence' },
                { text: '11 Design it Twice', link: '/design-it-twice' },
                { text: '12 Why Write Comments? The Four Excuses', link: '/why-write-comments-the-four-excuses' },
                { text: '13 Comments Should Describe Things that Aren’t Obvious from the Code', link: '/comments-should-describe-things-that-are-not-obvious-from-the-code' },
                { text: '14 Choosing Names', link: '/choosing-names' },
                { text: '15 Write The Comments First', link: '/write-the-comments-first' },
                { text: '16 Modifying Existing Code', link: '/modifying-existing-code' },
                { text: '17 Consistency', link: '/consistency' },
                { text: '18 Code Should be Obvious', link: '/code-should-be-obvious' },
                { text: '19 Software Trends', link: '/software-trends' },
                { text: '20 Designing for Performance', link: '/designing-for-performance' },
                { text: '21 Decide What Matters', link: '/decide-what-matters' },
                { text: '22 Conclusion', link: '/conclusion' },
                { text: 'Summary', link: '/summary' }
            ]
        }],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lamb/a-philosophy-of-software-design/' }
        ],
        editLink: {
            pattern: 'https://github.com/lamb/a-philosophy-of-software-design/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        }
    }
}