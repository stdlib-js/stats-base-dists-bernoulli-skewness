<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Skewness

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Bernoulli][bernoulli-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{1-2p}{\sqrt{p(1-p)}}" alt="Skewness for a Bernoulli distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \frac{1-2p}{\sqrt{p(1-p)}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{1-2p}{\sqrt{p(1-p)}}" data-equation="eq:bernoulli_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/skewness/docs/img/equation_bernoulli_skewness.svg" alt="Skewness for a Bernoulli distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import skewness from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-skewness@esm/index.mjs';
```

#### skewness( p )

Returns the [skewness][skewness] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var v = skewness( 0.1 );
// returns ~2.667

v = skewness( 0.5 );
// returns 0.0
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = skewness( NaN );
// returns NaN

v = skewness( 1.5 );
// returns NaN

v = skewness( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import skewness from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-skewness@esm/index.mjs';

var v;
var i;
var p;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = skewness( p );
    console.log( 'p: %d, skew(X;p): %d', p.toFixed( 4 ), v.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/bernoulli/skewness.h"
```

#### stdlib_base_dists_bernoulli_skewness( p )

Returns the skewness of a Bernoulli distribution with success probability 'p'.

```c
double y = stdlib_base_dists_bernoulli_skewness( 0.1 );
// returns ~2.667
```

The function accepts the following arguments:

-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_bernoulli_skewness( const double p );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/bernoulli/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double p;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_bernoulli_skewness( p );
        printf( "x: %lf , skew(X;p): %lf\n", p , y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-bernoulli-skewness.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-bernoulli-skewness

[test-image]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-bernoulli-skewness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-bernoulli-skewness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-bernoulli-skewness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-bernoulli-skewness/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-skewness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-bernoulli-skewness/main/LICENSE

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
