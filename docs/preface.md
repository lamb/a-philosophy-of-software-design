# 前言

人类已经为电子计算机编写程序80多年了，但令人惊讶的是关于如何设计程序或优秀的程序应该是什么样子的讨论却很少。关于软件开发过程（如敏捷开发）和开发工具（如调试器、版本控制系统、测试覆盖工具）已经有了相当多的讨论。编程技术（如面向对象编程和函数式编程）、设计模式和算法也已经有了全面的分析。这些讨论都是有价值的，但是对于软件设计的核心问题仍如隔靴搔痒。David Parns的经典论文“关于可用于把系统分解为模块的准则”发表于1971年，但在随后的45年里软件设计水平的发展并没有超过这篇论文太多。

计算机科学中最基本的问题是问题分解：如何把一个复杂问题分解成多个可独立解决的小块。问题分解是程序员每天要面对的主要设计工作，然而除了此处描述的工作之外，在任何一所大学里我都没有找到一门以问题分解为核心主题的独立课程。我们教授循环和面向对象编程，但不是软件设计。

此外，程序员之间在质量和生产力上存在巨大差异，但我们很少去了解是什么使优秀的程序员变得如此优秀或者如何在我们的课堂上教授这些技能。我曾与数位我认为是出色的程序员交谈，但是他们多数难以阐明是什么特定的技术赋予他们优势。许多人认为软件设计技能是天生的天赋无法传授。然而有相当多的科学证据表明许多领域的杰出表现更多地与高质量的实践有关，而不是先天的能力（参看，例如，Geoff Colvin 著《哪来的天才？练习中的平凡与伟大》）。

多年来这些问题一直让我感到困惑和沮丧。我想知道软件设计是否可以被教授，并假设设计技能区分开了优秀程序员与普通程序员。我最终认定回答这些问题的唯一方法是尝试教授一门关于软件设计的课程。这门课程是斯坦福大学的 CS 190 。在这门课上我提出了一套软件设计的原则。然后学生通过一系列的项目来理解和实践这些原则。课程的授课方式类似于传统的英语写作课。在英语课上学生运用一种迭代过程（写草稿，获得反馈，然后重写）来获得提升。在 CS 190 课程中，学生从零开始开发一款真实的软件。接着我们通过全面的代码检视来识别出设计问题。然后学生修改他们的项目来修复这些问题。这样学生可以看到如何通过应用设计原则来改进他们的代码。

我现在已经教过这门软件设计课程多次，这本书是基于课堂上出现的设计原则。这些原则是相当高的水平并且接近哲学（“定义不存在的错误”），所以这很难让学生以抽象的方式理解这些理念。学生最好的学习方式是通过编写代码，犯了错，然后理解他们为何犯错并根据原则做后续修复。

此时你很可能在想：是什么使我认为自己知道有关软件设计的所有答案？坦诚地说，我不知道。我学习编程的时候没有任何关于软件设计的课程，而且我也从来没有导师来教我设计原则。在我学习编程那时，代码检视几乎是没有。我关于软件设计的思想来自于个人编写和阅读代码的经验。在我的职业生涯中我已经用多种语言写了大约250000行代码。我曾在多个团队工作过，从零创建三个操作系统，多个文件与存储系统，基础设施工具例如调试器、构建系统、图形用户界面工具包，一种脚本语言，还有用于文本、绘图、演示和集成电路的交互式编辑器。在这过程中，我亲身经历了大型系统的问题，并尝试了许多设计技术。此外，我阅读了大量他人编写的代码，这使我接触到了各种各样的方法，有好的也有坏的。

从所有这些经验中，我尝试提取避免错误和使用技巧的共通点。本书是我实践经验的反映：这里描述的每个问题都是我亲身经历的，每种建议的技术都在我自己的编码中成功应用过。

我不希望这本书成为对于软件设计的定论；我相信我会错过一些有价值的技术，并且从长远来看我的一些建议可能会变成坏主意。不管怎样，我希望这本书可以开启关于软件设计的讨论。将本书中描述的思想与您自己的经验进行比较，并自行评估本书描述的方法是否确实能降低软件复杂度。这本书是一个观点集，所以有些读者会不同意我的一些建议。如果您不同意，请尝试理解原因。我很有兴趣了解哪些对您有效，哪些无效，以及您对软件设计的其他任何想法。我希望接踵而来的讨论会提升我们对软件设计的整体水平。我会把我所学习到的纳入这本书的未来版本。与我交流这本书的最好方法是发送电子邮件到下面的地址：

[software-design-book@googlegroups.com](mailto:software-design-book@googlegroups.com)

我有兴趣听到关于这本书的具体反馈，比如错误或改进建议，以及与软件设计相关的一般看法和经验。我对可以在本书未来版本中使用的令人信服的实例格外感兴趣。好的实例阐明了一个重要的设计原则，并且简单到可以用一至两个段落来解释。如果您想查看并参与讨论，您可以加入谷歌小组`software-design-book`。

如果出于某种原因`software-design-book`谷歌小组在未来消失了，请在网上搜索我的主页。主页上会更新如何交流本书的说明。请不要向我的个人邮箱发送书籍相关的邮件。

我建议您在读本书时抱有怀疑态度。总体目标是降低复杂度；这比您在本书阅读的任何特定的原理或思想都更为重要。如果您尝试一个从本书中获得的想法，然后发现他实际上并不能降低复杂度，那么您就不必再继续使用它（但是请告诉我你的经验，我想获得是什么有效与无效的反馈）。

本书质量的提升得益于大家提出的批评与建议。以下人员对本书的草稿提供了有用的意见：Jeff Dean, Sanjay Ghemawat, John Hartman, Brian Kernighan, James Koppel, Amy Ousterhout, Kay Ousterhout, Rob Pike, Partha Ranganathan, Keith Schwartz, 还有 Alex Snaps。Christos Kozyrakis 建议使用修饰词“深”与“浅”来描述类和接口，取代了之前的有些歧义的修饰词“厚”与“薄”。我非常感谢来上 CS 190 课程的学生；阅读他们的代码并与他们讨论的过程帮助我具象了我对设计的思索。