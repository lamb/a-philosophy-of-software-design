import{_ as e,c as t,o,a as i}from"./app.eff44e41.js";const p=JSON.parse('{"title":"Chapter 15 Write The Comments First(Use Comments As Part Of The Design Process)","description":"","frontmatter":{},"headers":[{"level":2,"title":"15.1 Delayed comments are bad comments","slug":"_15-1-delayed-comments-are-bad-comments","link":"#_15-1-delayed-comments-are-bad-comments","children":[]},{"level":2,"title":"15.2 Write the comments first","slug":"_15-2-write-the-comments-first","link":"#_15-2-write-the-comments-first","children":[]},{"level":2,"title":"15.3 Comments are a design tool","slug":"_15-3-comments-are-a-design-tool","link":"#_15-3-comments-are-a-design-tool","children":[]},{"level":2,"title":"15.4 Early comments are fun comments","slug":"_15-4-early-comments-are-fun-comments","link":"#_15-4-early-comments-are-fun-comments","children":[]},{"level":2,"title":"15.5 Are early comments expensive?","slug":"_15-5-are-early-comments-expensive","link":"#_15-5-are-early-comments-expensive","children":[]},{"level":2,"title":"15.6 Conclusion","slug":"_15-6-conclusion","link":"#_15-6-conclusion","children":[]}],"relativePath":"write-the-comments-first.md","lastUpdated":1668613999000}'),s={name:"write-the-comments-first.md"},n=i('<h1 id="chapter-15-write-the-comments-first-use-comments-as-part-of-the-design-process" tabindex="-1">Chapter 15 Write The Comments First(Use Comments As Part Of The Design Process) <a class="header-anchor" href="#chapter-15-write-the-comments-first-use-comments-as-part-of-the-design-process" aria-hidden="true">#</a></h1><p>Many developers put off writing documentation until the end of the development process, after coding and unit testing are complete. This is one of the surest ways to produce poor quality documentation. The best time to write comments is at the beginning of the process, as you write the code. Writing the comments first makes documentation part of the design process. Not only does this produce better documentation, but it also produces better designs and it makes the process of writing documentation more enjoyable.</p><h2 id="_15-1-delayed-comments-are-bad-comments" tabindex="-1">15.1 Delayed comments are bad comments <a class="header-anchor" href="#_15-1-delayed-comments-are-bad-comments" aria-hidden="true">#</a></h2><p>Almost every developer I have ever met puts off writing comments. When asked why they don\u2019t write documentation earlier, they say that the code is still changing. If they write documentation early, they say, they\u2019ll have to rewrite it when the code changes; better to wait until the code stabilizes. However, I suspect that there is also another reason, which is that they view documentation as drudge work; thus, they put it off as long as possible.</p><p>Unfortunately, this approach has several negative consequences. First, delaying documentation often means that it never gets written at all. Once you start delaying, it\u2019s easy to delay a bit more; after all, the code will be even more stable in a few more weeks. By the time the code has inarguably stabilized, there is a lot of it, which means the task of writing documentation has become huge and even less attractive. There\u2019s never a convenient time to stop for a few days and fill in all of the missing comments, and it\u2019s easy to rationalize that the best thing for the project is to move on and fix bugs or write the next new feature. This will create even more undocumented code.</p><p>Even if you do have the self-discipline to go back and write the comments (and don\u2019t fool yourself: you probably don\u2019t), the comments won\u2019t be very good. By this time in the process, you have checked out mentally. In your mind, this piece of code is done; you are eager to move on to your next project. You know that writing comments is the right thing to do, but it\u2019s no fun. You just want to get through it as quickly as possible. Thus, you make a quick pass over the code, adding just enough comments to look respectable. By now, it\u2019s been a while since you designed the code, so your memories of the design process are becoming fuzzy. You look at the code as you are writing the comments, so the comments repeat the code. Even if you try to reconstruct the design ideas that aren\u2019t obvious from the code, there will be things you don\u2019t remember. Thus, the comments are missing some of the most important things they should describe.</p><h2 id="_15-2-write-the-comments-first" tabindex="-1">15.2 Write the comments first <a class="header-anchor" href="#_15-2-write-the-comments-first" aria-hidden="true">#</a></h2><p>I use a different approach to writing comments, where I write the comments at the very beginning:</p><ul><li>For a new class, I start by writing the class interface comment.</li><li>Next, I write interface comments and signatures for the most important public methods, but I leave the method bodies empty.</li><li>I iterate a bit over these comments until the basic structure feels about right.</li><li>At this point I write declarations and comments for the most important class instance variables in the class.</li><li>Finally, I fill in the bodies of the methods, adding implementation comments as needed.</li><li>While writing method bodies, I usually discover the need for additional methods and instance variables. For each new method I write the interface comment before the body of the method; for instance variables I fill in the comment at the same time that I write the variable declaration.</li></ul><hr><p>When the code is done, the comments are also done. There is never a backlog of unwritten comments.</p><p>The comments-first approach has three benefits. First, it produces better comments. If you write the comments as you are designing the class, the key design issues will be fresh in your mind, so it\u2019s easy to record them. It\u2019s better to write the interface comment for each method before its body, so you can focus on the method\u2019s abstraction and interface without being distracted by its implementation. During the coding and testing process you will notice and fix problems with the comments. As a result, the comments improve over the course of development.</p><h2 id="_15-3-comments-are-a-design-tool" tabindex="-1">15.3 Comments are a design tool <a class="header-anchor" href="#_15-3-comments-are-a-design-tool" aria-hidden="true">#</a></h2><p>The second, and most important, benefit of writing the comments at the beginning is that it improves the system design. Comments provide the only way to fully capture abstractions, and good abstractions are fundamental to good system design. If you write comments describing the abstractions at the beginning, you can review and tune them before writing implementation code. To write a good comment, you must identify the essence of a variable or piece of code: what are the most important aspects of this thing? It\u2019s important to do this early in the design process; otherwise you are just hacking code.</p><p>Comments serve as a canary in the coal mine of complexity. If a method or variable requires a long comment, it is a red flag that you don\u2019t have a good abstraction. Remember from Chapter 4 that classes should be deep: the best classes have very simple interfaces yet implement powerful functions. The best way to judge the complexity of an interface is from the comments that describe it. If the interface comment for a method provides all the information needed to use the method and is also short and simple, that indicates that the method has a simple interface. Conversely, if there\u2019s no way to describe a method completely without a long and complicated comment, then the method has a complex interface. You can compare a method\u2019s interface comment with the implementation to get a sense of how deep the method is: if the interface comment must describe all the major features of the implementation, then the method is shallow. The same idea applies to variables: if it takes a long comment to fully describe a variable, it\u2019s a red flag that suggests you may not have chosen the right variable decomposition. Overall, the act of writing comments allows you to evaluate your design decisions early, so you can discover and fix problems.</p><p>img Red Flag: Hard to Describe img</p><p>The comment that describes a method or variable should be simple and yet complete. If you find it difficult to write such a comment, that\u2019s an indicator that there may be a problem with the design of the thing you are describing.</p><p>Of course, comments are only a good indicator of complexity if they are complete and clear. If you write a method interface comment that doesn\u2019t provide all the information needed to invoke the method, or one that is so cryptic that it\u2019s hard to understand, then that comment doesn\u2019t provide a good measure of the method\u2019s depth.</p><h2 id="_15-4-early-comments-are-fun-comments" tabindex="-1">15.4 Early comments are fun comments <a class="header-anchor" href="#_15-4-early-comments-are-fun-comments" aria-hidden="true">#</a></h2><p>The third and final benefit of writing comments early is that it makes comment-writing more fun. For me, one of the most enjoyable parts of programming is the early design phase for a new class, where I\u2019m fleshing out the abstractions and structure for the class. Most of my comments are written during this phase, and the comments are how I record and test the quality of my design decisions. I\u2019m looking for the design that can be expressed completely and clearly in the fewest words. The simpler the comments, the better I feel about my design, so finding simple comments is a source of pride. If you are programming strategically, where your main goal is a great design rather than just writing code that works, then writing comments should be fun, since that\u2019s how you identify the best designs.</p><h2 id="_15-5-are-early-comments-expensive" tabindex="-1">15.5 Are early comments expensive? <a class="header-anchor" href="#_15-5-are-early-comments-expensive" aria-hidden="true">#</a></h2><p>Now let\u2019s revisit the argument for delaying comments, which is that it avoids the cost of reworking the comments as the code evolves. A simple back-of-the-envelope calculation will show that this doesn\u2019t save much. First, estimate the total fraction of development time that you spend typing in code and comments together, including time to revise code and comments; it\u2019s unlikely that this will be more than about 10% of all development time. Even if half of your total code lines are comments, writing comments probably doesn\u2019t account for more than about 5% of your total development time. Delaying the comments until the end will save only a fraction of this, which isn\u2019t very much.</p><p>Writing the comments first will mean that the abstractions will be more stable before you start writing code. This will probably save time during coding. In contrast, if you write the code first, the abstractions will probably evolve as you code, which will require more code revisions than the comments-first approach. When you consider all of these factors, it\u2019s possible that it might be faster overall to write the comments first.</p><h2 id="_15-6-conclusion" tabindex="-1">15.6 Conclusion <a class="header-anchor" href="#_15-6-conclusion" aria-hidden="true">#</a></h2><p>If you haven\u2019t ever tried writing the comments first, give it a try. Stick with it long enough to get used to it. Then think about how it affects the quality of your comments, the quality of your design, and your overall enjoyment of software development. After you have tried this for a while, let me know whether your experience matches mine, and why or why not.</p>',25),a=[n];function r(m,h,c,l,d,u){return o(),t("div",null,a)}const y=e(s,[["render",r]]);export{p as __pageData,y as default};